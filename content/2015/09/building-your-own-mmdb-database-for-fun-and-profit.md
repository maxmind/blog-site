---
title: "Building Your Own MMDB Database for Fun and Profit"
date: "2015-09-29"
lastmod: "2026-04-09"
category:
  - "IP intelligence"
tag:
  - "IP network data"
  - "Technical tutorials"
authors:
  - "the team at MaxMind"
---

## Introduction

If you use a GeoIP database, you're probably familiar with MaxMind's
[MMDB format](https://github.com/maxmind/MaxMind-DB/blob/main/MaxMind-DB-spec.md).

At MaxMind, we created the MMDB format because we needed a format that was very
fast and highly portable. MMDB comes with supported readers in many languages.
In this blog post, we'll create an MMDB file which contains an access list of IP
addresses. This kind of database could be used when allowing access to a VPN or
a hosted application.

## Prerequisites

The code samples in this post use the
[Go `mmdbwriter` module](https://pkg.go.dev/github.com/maxmind/mmdbwriter) to
create MMDB files and the
[`maxminddb-golang` module](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2)
to read them. You can also read MMDB files with the officially supported
[.NET](https://github.com/maxmind/MaxMind-DB-Reader-dotnet),
[Java](https://github.com/maxmind/MaxMind-DB-Reader-java),
[Node.js](https://github.com/maxmind/GeoIP2-node),
[PHP](https://github.com/maxmind/MaxMind-DB-Reader-php),
[Python](https://github.com/maxmind/MaxMind-DB-Reader-python), and
[Ruby](https://github.com/maxmind/MaxMind-DB-Reader-ruby) readers, in addition
to unsupported third party MMDB readers. Many are listed on the
[GeoIP download page](https://dev.maxmind.com/geoip/docs/databases/). So, as far
as deployments go, you're not constrained to any one language when you want to
read from the database.

You will need:

- [Go 1.24](https://go.dev/dl/) or later installed, with `go` in your `$PATH`
- the [`mmdbinspect`](https://github.com/maxmind/mmdbinspect) tool installed and
  in your `$PATH`
- a basic understanding of [Go](https://gobyexample.com/) and of
  [IP addresses](https://en.wikipedia.org/wiki/IP_address) and
  [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)

## Getting Started

In our example, we want to create an access list of some IP addresses to allow
them access to a VPN or a hosted application. For each IP address or IP range,
we need to track a few things about the person who is connecting from this IP.

- name
- development environments to which they need access
- an arbitrary session expiration time, defined in seconds

To do so, we create the following Go program:

```go
package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/maxmind/mmdbwriter"
	"github.com/maxmind/mmdbwriter/mmdbtype"
)

func main() {
	// Create a new MMDB tree.
	writer, err := mmdbwriter.New(mmdbwriter.Options{
		// "DatabaseType" is some arbitrary string describing the database.
		// At MaxMind we use strings like "GeoIP2-City", "GeoIP2-Country", etc.
		DatabaseType: "My-IP-Data",

		// "Description" is a map where the keys are language codes and the
		// values are descriptions of the database in that language.
		Description: map[string]string{
			"en": "My database of IP data",
			"fr": "Mon Data d'IP",
		},

		// "IPVersion" can be either 4 or 6.
		IPVersion: 4,

		// "RecordSize" is the record size in bits. Either 24, 28, or 32.
		RecordSize: 24,
	})
	if err != nil {
		log.Fatal(err)
	}

	// Define employee data to insert.
	employees := map[string]mmdbtype.Map{
		// Jane connects from a single IP address.
		"214.71.225.36/32": {
			"environments": mmdbtype.Slice{
				mmdbtype.String("development"),
				mmdbtype.String("staging"),
				mmdbtype.String("production"),
			},
			"expires": mmdbtype.Uint32(86400),
			"name":    mmdbtype.String("Jane"),
		},
		// Klaus could connect from any of 16 IP addresses (/28).
		"6.248.221.67/28": {
			"environments": mmdbtype.Slice{
				mmdbtype.String("development"),
				mmdbtype.String("staging"),
			},
			"expires": mmdbtype.Uint32(3600),
			"name":    mmdbtype.String("Klaus"),
		},
	}

	for cidr, data := range employees {
		_, network, err := net.ParseCIDR(cidr)
		if err != nil {
			log.Fatal(err)
		}
		if err := writer.Insert(network, data); err != nil {
			log.Fatal(err)
		}
	}

	// Write the database to disk.
	fh, err := os.Create("users.mmdb")
	if err != nil {
		log.Fatal(err)
	}
	defer fh.Close()

	_, err = writer.WriteTo(fh)
	if err != nil {
		log.Fatal(err)
	}

	if err := fh.Close(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("users.mmdb has now been created")
}
```

## The Code in Review

### Step 1

Create a new
[`mmdbwriter.Tree`](https://pkg.go.dev/github.com/maxmind/mmdbwriter#Tree) by
calling
[`mmdbwriter.New()`](https://pkg.go.dev/github.com/maxmind/mmdbwriter#New). The
tree is where the database is stored in memory as it is created.

```go
writer, err := mmdbwriter.New(mmdbwriter.Options{...})
```

The options we've used are all commented in the script, but there are
[additional options](https://pkg.go.dev/github.com/maxmind/mmdbwriter#Options)
available. To keep things simple (and easily readable), we used IPv4 to store
addresses in this example, but you could also use IPv6.

### Step 2

For each IP address or range, define the data using
[`mmdbtype`](https://pkg.go.dev/github.com/maxmind/mmdbwriter/mmdbtype) types
and call the
[`Insert()`](https://pkg.go.dev/github.com/maxmind/mmdbwriter#Tree.Insert)
method. This method takes a `*net.IPNet` (from
[`net.ParseCIDR()`](https://pkg.go.dev/net#ParseCIDR)) and an
`mmdbtype.DataType` value.

```go
for cidr, data := range employees {
	_, network, err := net.ParseCIDR(cidr)
	if err != nil {
		log.Fatal(err)
	}
	if err := writer.Insert(network, data); err != nil {
		log.Fatal(err)
	}
}
```

The MMDB format is strongly typed. You must define your data using `mmdbtype`
types such as `Map`, `String`, `Uint32`, and `Slice`. You're encouraged to
review
[the full list of available types](https://pkg.go.dev/github.com/maxmind/mmdbwriter/mmdbtype).

We've inserted information about two employees, Jane and Klaus. They're both on
different IP ranges. You'll see that Jane has access to more environments than
Klaus has, but Klaus could theoretically connect from any of 16 different IP
addresses (/28) whereas Jane will only connect from one (/32).

### Step 3

Open a file and write the database to disk.

```go
fh, err := os.Create("users.mmdb")
// ...
_, err = writer.WriteTo(fh)
```

## Let's Do This

First, initialize a Go module and then run the script:

```bash
$ go mod init mmdb-tutorial
$ go mod tidy
$ go run main.go
users.mmdb has now been created
```

You should also see the `users.mmdb` file in the folder from which you ran the
script.

## Reading the File

Now we have our brand new MMDB file. Let's read the information we stored in it.
Save this as `main.go` (replacing the previous one) and run `go mod tidy` to
fetch the new dependency.

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/netip"
	"os"

	"github.com/oschwald/maxminddb-golang/v2"
)

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Usage: go run main.go <ip_address>")
	}
	ipStr := os.Args[1]

	db, err := maxminddb.Open("users.mmdb")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	fmt.Printf("Description: %s\n", db.Metadata.Description["en"])

	ip, err := netip.ParseAddr(ipStr)
	if err != nil {
		log.Fatalf("Invalid IP address: %s", ipStr)
	}

	result := db.Lookup(ip)
	if err := result.Err(); err != nil {
		log.Fatal(err)
	}
	if !result.Found() {
		fmt.Println("No record found for", ipStr)
		return
	}

	var record map[string]any
	if err := result.Decode(&record); err != nil {
		log.Fatal(err)
	}

	out, err := json.MarshalIndent(record, "", "  ")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(out))
}
```

## Reading the File: Review

<!--lint disable no-duplicate-headings -->

### Step 1

Ensure that the user has provided an IP address via the command line.

```go
if len(os.Args) < 2 {
	log.Fatal("Usage: go run main.go <ip_address>")
}
```

### Step 2

We create a new
[`maxminddb.Reader`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Reader)
by calling
[`maxminddb.Open()`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Open),
using the name of the file we just created as the argument.

```go
db, err := maxminddb.Open("users.mmdb")
```

### Step 3

Check the metadata. This is optional, but here we print the description we added
to the metadata in the previous script.

```go
fmt.Printf("Description: %s\n", db.Metadata.Description["en"])
```

`db.Metadata` is a
[`Metadata`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Metadata)
struct. Beyond the `Description`, it provides extensive details about the
generated file.

### Step 4

We perform a record lookup and print it as formatted JSON. The `Lookup` method
returns a
[`Result`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Result).
We check for errors with `Err()`, then use `Found()` to determine whether the IP
has a record, and finally `Decode` the result.

```go
result := db.Lookup(ip)
if err := result.Err(); err != nil {
	log.Fatal(err)
}
if !result.Found() {
	fmt.Println("No record found for", ipStr)
	return
}
var record map[string]any
if err := result.Decode(&record); err != nil {
	log.Fatal(err)
}
```

You could also define a struct with `maxminddb` tags for type-safe decoding:

```go
type UserRecord struct {
	Name         string   `maxminddb:"name"`
	Environments []string `maxminddb:"environments"`
	Expires      uint32   `maxminddb:"expires"`
}
```

## Running the Script

Now let's run the script and perform a lookup on Jane's IP address:

```bash
$ go run main.go 214.71.225.36
Description: My database of IP data
{
  "environments": [
    "development",
    "staging",
    "production"
  ],
  "expires": 86400,
  "name": "Jane"
}
```

We see that our `Description` and our map of user data is returned exactly as we
initially provided it. But what about Klaus, is he also in the database?

```bash
$ go run main.go 6.248.221.64
Description: My database of IP data
{
  "environments": [
    "development",
    "staging"
  ],
  "expires": 3600,
  "name": "Klaus"
}

$ go run main.go 6.248.221.79
Description: My database of IP data
{
  "environments": [
    "development",
    "staging"
  ],
  "expires": 3600,
  "name": "Klaus"
}

$ go run main.go 6.248.221.80
Description: My database of IP data
No record found for 6.248.221.80
```

We gave Klaus an IP range of `6.248.221.67/28`, which translates to
`6.248.221.64 to 6.248.221.79`. You can see that when we get to `6.248.221.80`
there is no record at this address.

## Iterating Over the Search Tree

It takes time to look up every address individually. Is there a way to speed
things up? As it happens, there is.

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/oschwald/maxminddb-golang/v2"
)

func main() {
	db, err := maxminddb.Open("users.mmdb")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	for result := range db.Networks() {
		var record map[string]any
		if err := result.Decode(&record); err != nil {
			log.Fatal(err)
		}
		if len(record) == 0 {
			continue
		}
		out, err := json.MarshalIndent(record, "", "  ")
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%s\n%s\n\n", result.Prefix(), string(out))
	}
}
```

## Iterating: Review

### Step 1

As in the previous example, we open the database with `maxminddb.Open()`.

### Step 2

To iterate over every network in the database, we use the
[`Networks()`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Reader.Networks)
method. This returns a Go [range function](https://go.dev/blog/range-functions)
iterator. Each iteration yields a
[`Result`](https://pkg.go.dev/github.com/oschwald/maxminddb-golang/v2#Result)
containing the network prefix and its associated record.

By default, `Networks()` skips aliased IPv4 networks in IPv6 databases and
networks without data.

Let's look at the output.

```bash
$ go run main.go
6.248.221.64/28
{
  "environments": [
    "development",
    "staging"
  ],
  "expires": 3600,
  "name": "Klaus"
}

214.71.225.36/32
{
  "environments": [
    "development",
    "staging",
    "production"
  ],
  "expires": 86400,
  "name": "Jane"
}
```

The output shows each network and its associated record. Note that even though
we specified Klaus's range as `6.248.221.67/28`, the writer correctly stored it
as `6.248.221.64/28`, the canonical form of the network.

## The Mashup

To extend our example, let's take the data from an existing GeoIP database and
combine it with our custom employee data. We'll start with the GeoLite City
database and enrich it with our access list information.

You may need to
[download the GeoLite City database](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data/)
or use [geoipupdate](https://dev.maxmind.com/geoip/updating-databases/) to
obtain it.

Save this as `main.go` (replacing the previous one) and run `go mod tidy` to
fetch the new dependencies.

We load the existing database using
[`mmdbwriter.Load()`](https://pkg.go.dev/github.com/maxmind/mmdbwriter#Load),
then merge our employee data into the matching IP ranges using
[`InsertFunc()`](https://pkg.go.dev/github.com/maxmind/mmdbwriter#Tree.InsertFunc)
with the
[`TopLevelMergeWith`](https://pkg.go.dev/github.com/maxmind/mmdbwriter/inserter#TopLevelMergeWith)
inserter. This adds our new top-level keys to the existing GeoLite records
without overwriting any of the original data.

```go
package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/maxmind/mmdbwriter"
	"github.com/maxmind/mmdbwriter/inserter"
	"github.com/maxmind/mmdbwriter/mmdbtype"
)

func main() {
	// Load the existing database that we want to enrich.
	writer, err := mmdbwriter.Load("GeoLite2-City.mmdb", mmdbwriter.Options{})
	if err != nil {
		log.Fatal(err)
	}

	// Define employee data to merge into the existing records.
	employees := map[string]mmdbtype.Map{
		"214.71.225.36/32": {
			"environments": mmdbtype.Slice{
				mmdbtype.String("development"),
				mmdbtype.String("staging"),
				mmdbtype.String("production"),
			},
			"expires": mmdbtype.Uint32(86400),
			"name":    mmdbtype.String("Jane"),
		},
		"6.248.221.67/28": {
			"environments": mmdbtype.Slice{
				mmdbtype.String("development"),
				mmdbtype.String("staging"),
			},
			"expires": mmdbtype.Uint32(3600),
			"name":    mmdbtype.String("Klaus"),
		},
	}

	for cidr, data := range employees {
		_, network, err := net.ParseCIDR(cidr)
		if err != nil {
			log.Fatal(err)
		}
		// InsertFunc with TopLevelMergeWith merges our new top-level keys
		// into the existing GeoLite record, rather than replacing it.
		if err := writer.InsertFunc(network, inserter.TopLevelMergeWith(data)); err != nil {
			log.Fatal(err)
		}
	}

	// Write the enriched database to disk.
	fh, err := os.Create("users-enriched.mmdb")
	if err != nil {
		log.Fatal(err)
	}
	defer fh.Close()

	_, err = writer.WriteTo(fh)
	if err != nil {
		log.Fatal(err)
	}

	if err := fh.Close(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("users-enriched.mmdb has now been created")
}
```

Now, when we look up our employee IP addresses in the enriched database using
`mmdbinspect -db users-enriched.mmdb 214.71.225.36`, we can see that the records
contain both the geographic data and our custom fields. `mmdbinspect` outputs
YAML by default:

```yaml
database_path: users-enriched.mmdb
requested_lookup: 214.71.225.36
network: 214.71.225.36/32
record:
  continent:
    code: NA
    geoname_id: 6255149
    names:
      de: Nordamerika
      en: North America
      ...
  country:
    geoname_id: 6252001
    iso_code: US
    names:
      en: United States
      ...
  environments:
    - development
    - staging
    - production
  expires: 86400
  location:
    accuracy_radius: 1000
    latitude: 37.751
    longitude: -97.822
    time_zone: America/Chicago
  name: Jane
  registered_country:
    ...
```

The record now contains both the original geographic fields (`continent`,
`country`, `location`) and our custom access list fields (`environments`,
`expires`, `name`).

## The Mashup: Review

To enrich the existing database, we make two key changes from our original
"Getting Started" script:

### Step 1

Instead of creating a new tree with `mmdbwriter.New()`, we load the existing
database:

```go
writer, err := mmdbwriter.Load("GeoLite2-City.mmdb", mmdbwriter.Options{})
```

This loads the entire GeoLite database into a writable tree that we can modify.

### Step 2

Instead of `Insert()`, we use `InsertFunc()` with
`inserter.TopLevelMergeWith()`:

```go
if err := writer.InsertFunc(network, inserter.TopLevelMergeWith(data)); err != nil {
	log.Fatal(err)
}
```

The `TopLevelMergeWith` inserter merges our new map keys into the existing
record's map. If we used `Insert()` instead, the default behavior would replace
the existing GeoLite record entirely, losing all the geographic data.

For a more detailed walkthrough of this pattern, see our article on [enriching
MMDB files with your own data using
Go]({{< relref "2020/09/enriching-mmdb-files-with-your-own-data-using-go.md" >}}).

## Deploying Our Application

Now we're at the point where we can make use of our database. With just a few
lines of code you can now use your MMDB file to assist in the authorization of
your application or VPN users. For example, you might include the following in
your authentication handler:

```go
import (
	"log"
	"net/netip"

	"github.com/oschwald/maxminddb-golang/v2"
)

type UserRecord struct {
	// Use a pointer so we can distinguish "field absent" from "empty string".
	Name         *string  `maxminddb:"name"`
	Environments []string `maxminddb:"environments"`
	Expires      uint32   `maxminddb:"expires"`
	Location     struct {
		TimeZone string `maxminddb:"time_zone"`
	} `maxminddb:"location"`
}

func main() {
	// Open the reader once at startup and reuse it. It is safe for
	// concurrent use.
	db, err := maxminddb.Open("/path/to/users-enriched.mmdb")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Pass db to your HTTP handlers, auth middleware, etc.
	// ...
}

func isIPValid(db *maxminddb.Reader, ipStr string) (*UserRecord, bool) {
	ip, err := netip.ParseAddr(ipStr)
	if err != nil {
		return nil, false
	}

	var record UserRecord
	if err := db.Lookup(ip).Decode(&record); err != nil {
		log.Printf("MMDB lookup error for %s: %v", ipStr, err)
		return nil, false
	}

	// A nil Name means this IP has no employee data. It may exist in
	// GeoLite but is not on our access list.
	if record.Name == nil {
		return nil, false
	}

	// Use record.Expires to set session expiration.
	// Use record.Location.TimeZone for displaying dates and times.
	return &record, true
}
```

Here's a quick summary of what's going on:

- As part of your deployment you'll naturally need to include your MMDB file,
  stored in the location of your choice.
- You'll need to create a `maxminddb.Reader` by calling `maxminddb.Open()`. Open
  it once and reuse it. The reader is safe for concurrent use.
- If `Name` is nil, the IP exists in GeoLite but has no employee data, so it is
  not on our access list.
- If the IP is found, you can set a session expiration.
- If the IP is found, you can also use `record.Location.TimeZone` from the
  GeoLite data to customize the user's experience. Keep in mind that this field
  comes from the GeoLite database and may not be available for all IP addresses.

## Pro Tips

### Merge Strategies

The `mmdbwriter` module provides several
[inserter functions](https://pkg.go.dev/github.com/maxmind/mmdbwriter/inserter)
that control what happens when you insert data for a network that already has a
record:

- **`ReplaceWith`**: the default when using `Insert()`. The new data completely
  replaces the existing record.
- **`TopLevelMergeWith`**: merges top-level map keys. Existing keys that aren't
  in the new data are preserved.
- **`DeepMergeWith`**: recursively merges nested maps and slices.

Choose the strategy that fits your use case. For enriching existing databases,
`TopLevelMergeWith` is usually what you want.

### Thread Safety

The `Insert` and `InsertFunc` methods are not safe for concurrent use. Perform
all insertions from a single goroutine before calling `WriteTo`.

## Taking This Further

Today we've shown how you can create your own MMDB database and enrich it with
data from a GeoLite database. We've only included a few data points, but MaxMind
databases contain much more data you can use to build a solution to meet your
business requirements.

For a more detailed walkthrough of enriching MMDB files, see our article on
[enriching MMDB files with your own data using
Go]({{< relref "2020/09/enriching-mmdb-files-with-your-own-data-using-go.md" >}}).
For full API documentation, see the
[`mmdbwriter` package documentation](https://pkg.go.dev/github.com/maxmind/mmdbwriter).
