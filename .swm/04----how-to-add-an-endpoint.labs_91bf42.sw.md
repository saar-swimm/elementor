---
id: labs_91bf42
name: 04 -- How to Add an Endpoint
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  core/app/modules/kit-library/data/kits/controller.php: 02bd2baae990f564d1f48bb52a7173f7d8f99a54
  core/app/modules/kit-library/data/kits/endpoints/download-link.php: 3cdc0e456d3b5a65661947f5b26d6d8faff8efa8
---
# 04 -- How to Add an Endpoint

In this document, we will learn how to add a new Endpoint to the system.

An Endpoint is 🙋‍



Some examples of `Endpoint`[<sup id="7fac47">↓</sup>](#f-7fac47)s are `Typography`[<sup id="d75f8c">↓</sup>](#f-d75f8c), `Templates`[<sup id="6d0405">↓</sup>](#f-6d0405), `Colors`[<sup id="c4299f">↓</sup>](#f-c4299f), and `Favorites`[<sup id="6706d8">↓</sup>](#f-6706d8).
Note: some of these examples inherit indirectly from `Endpoint`[<sup id="7fac47">↓</sup>](#f-7fac47).
## Inherit from `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2) or `Base`[<sup id="ec8380">↓</sup>](#f-ec8380)? 🤔

Instances of `Endpoint`[<sup id="7fac47">↓</sup>](#f-7fac47) inherit directly from `Endpoint`[<sup id="7fac47">↓</sup>](#f-7fac47) when 🙋 or from `Base`[<sup id="ec8380">↓</sup>](#f-ec8380) when 🙋‍.

In this document we demonstrate inheriting from `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2) as it is more common.

## TL;DR - How to Add a `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2)

1. Create a new class inheriting from `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2)&nbsp;
2. Implement `get_name`[<sup id="fab6ef">↓</sup>](#f-fab6ef) and `get_format`[<sup id="11fb8d">↓</sup>](#f-11fb8d).
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934) for this example.

A `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934) is 🙋

<br/>

### `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934) Usage Example
For example, this is how `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934) can be used:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/kit-library/data/kits/controller.php
```
⬜ 55     			'id_arg_type_regex' => '[\w]+',
⬜ 56     		] );
⬜ 57     
🟩 58     		$this->register_endpoint( new Endpoints\Download_Link( $this ) );
⬜ 59     		$this->register_endpoint( new Endpoints\Favorites( $this ) );
⬜ 60     	}
⬜ 61     
```

<br/>


## Steps to Adding a new `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2)
### 1\. Inherit from `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2).

<br/>

We first need to define our class in the relevant file, and inherit from `Endpoint`[<sup id="bdc5b2">↓</sup>](#f-bdc5b2):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/kit-library/data/kits/endpoints/download-link.php
```php
⬜ 11     /**
⬜ 12      * @property Controller $controller
⬜ 13      */
🟩 14     class Download_Link extends Endpoint {
⬜ 15     	public function get_name() {
⬜ 16     		return 'download-link';
⬜ 17     	}
```

<br/>





### 2\. Implement `get_name`[<sup id="fab6ef">↓</sup>](#f-fab6ef) and `get_format`[<sup id="11fb8d">↓</sup>](#f-11fb8d)
The goal of `get_name`[<sup id="87179b">↓</sup>](#f-87179b) is to 🙋.

<br/>

In this example, `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/kit-library/data/kits/endpoints/download-link.php
```php
⬜ 12      * @property Controller $controller
⬜ 13      */
⬜ 14     class Download_Link extends Endpoint {
🟩 15     	public function get_name() {
⬜ 16     		return 'download-link';
⬜ 17     	}
⬜ 18     
```

<br/>

The goal of `get_format`[<sup id="f68eb5">↓</sup>](#f-f68eb5) is to 🙋.

<br/>

In this example, `Download_Link`[<sup id="03b934">↓</sup>](#f-03b934), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/kit-library/data/kits/endpoints/download-link.php
```php
⬜ 16     		return 'download-link';
⬜ 17     	}
⬜ 18     
🟩 19     	public function get_format() {
⬜ 20     		return 'kits/download-link/{id}';
⬜ 21     	}
⬜ 22     
```

<br/>




<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-bdc5b2">Endpoint</span>[^](#bdc5b2) - "data/base/endpoint.php" L8
```php
abstract class Endpoint {
```

<span id="f-03b934">Download_Link</span>[^](#03b934) - "core/app/modules/kit-library/data/kits/endpoints/download-link.php" L14
```php
class Download_Link extends Endpoint {
```

<span id="f-7fac47">Endpoint</span>[^](#7fac47) - "data/base/endpoint.php" L8
```php
abstract class Endpoint {
```

<span id="f-d75f8c">Typography</span>[^](#d75f8c) - "core/editor/data/globals/endpoints/typography.php" L6
```php
class Typography extends Base {
```

<span id="f-6d0405">Templates</span>[^](#6d0405) - "includes/template-library/data/endpoints/templates.php" L11
```php
class Templates extends Endpoint {
```

<span id="f-c4299f">Colors</span>[^](#c4299f) - "core/editor/data/globals/endpoints/colors.php" L6
```php
class Colors extends Base {
```

<span id="f-6706d8">Favorites</span>[^](#6706d8) - "core/app/modules/kit-library/data/kits/endpoints/favorites.php" L14
```php
class Favorites extends Endpoint {
```

<span id="f-ec8380">Base</span>[^](#ec8380) - "core/editor/data/globals/endpoints/base.php" L9
```php
abstract class Base extends Endpoint {
```

<span id="f-fab6ef">get_name</span>[^](#fab6ef) - "core/app/modules/kit-library/data/kits/endpoints/download-link.php" L15
```php
	public function get_name() {
```

<span id="f-11fb8d">get_format</span>[^](#11fb8d) - "core/app/modules/kit-library/data/kits/endpoints/download-link.php" L19
```php
	public function get_format() {
```

<span id="f-87179b">get_name</span>[^](#87179b) - "core/app/modules/kit-library/data/kits/endpoints/download-link.php" L15
```php
	public function get_name() {
```

<span id="f-f68eb5">get_format</span>[^](#f68eb5) - "core/app/modules/kit-library/data/kits/endpoints/download-link.php" L19
```php
	public function get_format() {
```
