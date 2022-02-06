---
id: labs_df3242
name: 02 -- How to Add a Base
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  modules/compatibility-tag/compatibility-tag-report.php: bb9e214e7a02cf5572c68e50be204e92d1eedd29
  readme.txt: 6bb5c9f784b944692b8f8fda6bc7ef3ae480c797
  modules/compatibility-tag/base-module.php: ccd75a551ae38d0702517ccb5deb8b8e83c82105
  includes/autoloader.php: 96195293cec05f408e50c653353fa5e0104b436a
---

This document describes what a Base is and how to create a new one.

A Base is 🙋‍



Some examples of `Base`[<sup id="43e8f7">↓</sup>](#f-43e8f7)s are `WordPress`[<sup id="fdb5bf">↓</sup>](#f-fdb5bf), `User`[<sup id="f7f6eb">↓</sup>](#f-f7f6eb), `Theme`[<sup id="53fc35">↓</sup>](#f-53fc35), and `Server`[<sup id="5a692d">↓</sup>](#f-5a692d).
## Other base classes to consider
Most instances of `Base`[<sup id="43e8f7">↓</sup>](#f-43e8f7) inherit directly from `Base`[<sup id="43e8f7">↓</sup>](#f-43e8f7), but you might want to consider the following base classes as well:

- `Base_Plugin`[<sup id="248dee">↓</sup>](#f-248dee): Suitable base for 🙋
    - e.g. `Plugins`[<sup id="43ee9c">↓</sup>](#f-43ee9c), `MU_Plugins`[<sup id="dd5269">↓</sup>](#f-dd5269), and `Network_Plugins`[<sup id="47a48d">↓</sup>](#f-47a48d).
- `Base`[<sup id="a4112c">↓</sup>](#f-a4112c): Base class of all 🙋‍
    - e.g. `WordPress`[<sup id="ef7305">↓</sup>](#f-ef7305).
- `Base_Plugin`[<sup id="3331d6">↓</sup>](#f-3331d6): Inherit from this when 🙋
    - e.g. `Plugins`[<sup id="c12238">↓</sup>](#f-c12238).

In this document we demonstrate inheriting from `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4) as it is the most common.

## TL;DR - How to Add a `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4)

1. Create a new class inheriting from `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4)&nbsp;
   - Place the file in one of the directories under `📄 modules`,
     e.g. `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7) is defined in `📄 modules/compatibility-tag/compatibility-tag-report.php`.
2. Implement `get_fields`[<sup id="a80747">↓</sup>](#f-a80747) and `get_title`[<sup id="c94621">↓</sup>](#f-c94621).
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7) for this example.

A `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7) is 🙋

<br/>

### `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7) Usage Example
For example, this is how `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7) can be used:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/compatibility-tag/base-module.php
```
⬜ 140    				"{$plugin_short_name}_compatibility",
⬜ 141    				[
⬜ 142    					'file_name' => __DIR__ . '/compatibility-tag-report.php',
🟩 143    					'class_name' => __NAMESPACE__ . '\Compatibility_Tag_Report',
⬜ 144    					'fields' => [
⬜ 145    						'compatibility_tag_service' => $this->get_compatibility_tag_service(),
⬜ 146    						'plugin_label' => $this->get_plugin_label(),
```

<br/>


## Steps to Adding a new `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4)
### 1\. Inherit from `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4).
All `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4)s are defined under `📄 modules`.

<br/>

We first need to define our class in the relevant file, and inherit from `Base`[<sup id="b73bd4">↓</sup>](#f-b73bd4):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/compatibility-tag/compatibility-tag-report.php
```php
⬜ 10     	exit; // Exit if accessed directly.
⬜ 11     }
⬜ 12     
🟩 13     class Compatibility_Tag_Report extends Base {
⬜ 14     	/**
⬜ 15     	 * @var Compatibility_Tag
⬜ 16     	 */
```

<br/>





### 2\. Implement `get_fields`[<sup id="a80747">↓</sup>](#f-a80747) and `get_title`[<sup id="c94621">↓</sup>](#f-c94621)
The goal of `get_fields`[<sup id="78e9fb">↓</sup>](#f-78e9fb) is to 🙋.

<br/>

In this example, `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/compatibility-tag/compatibility-tag-report.php
```php
⬜ 59     	 *
⬜ 60     	 * @return string[]
⬜ 61     	 */
🟩 62     	public function get_fields() {
⬜ 63     		return [
⬜ 64     			'report_data' => '',
⬜ 65     		];
```

<br/>

The goal of `get_title`[<sup id="8aa3e7">↓</sup>](#f-8aa3e7) is to 🙋.

<br/>

In this example, `Compatibility_Tag_Report`[<sup id="ac7da7">↓</sup>](#f-ac7da7), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/compatibility-tag/compatibility-tag-report.php
```php
⬜ 50     	 *
⬜ 51     	 * @return string
⬜ 52     	 */
🟩 53     	public function get_title() {
⬜ 54     		return $this->plugin_label . ' - Compatibility Tag';
⬜ 55     	}
⬜ 56     
```

<br/>



## Optionally, these snippets may be helpful 🙋


<br/>

Update `📄 readme.txt`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1988   
⬜ 1989   = 1.9.8 - 2018-03-12 =
⬜ 1990   * Fix: Activate publish button if there is an auto-save version
🟩 1991   * Fix: Server error message missing in edge cases
⬜ 1992   * Fix: Updated dialog library ([#3668](https://github.com/elementor/elementor/issues/3668))
⬜ 1993   * Fix: Text Decoration option in Button Widget ([#3701](https://github.com/elementor/elementor/issues/3701))
⬜ 1994   * Fix: Added `autopause=0` in order to allow multiple autoplay in Vimeo video
```

<br/>

Update `📄 includes/autoloader.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/autoloader.php
```
⬜ 224    				'version' => '2.9.0',
⬜ 225    			],
⬜ 226    			'System_Info\Classes\Server_Reporter' => [
🟩 227    				'replacement' => 'Modules\System_Info\Reporters\Server',
⬜ 228    				'version' => '2.9.0',
⬜ 229    			],
⬜ 230    			'System_Info\Classes\MU_Plugins_Reporter' => [
```

<br/>


<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-b73bd4">Base</span>[^](#b73bd4) - "modules/system-info/reporters/base.php" L20
```php
abstract class Base {
```

<span id="f-ac7da7">Compatibility_Tag_Report</span>[^](#ac7da7) - "modules/compatibility-tag/compatibility-tag-report.php" L13
```php
class Compatibility_Tag_Report extends Base {
```

<span id="f-43e8f7">Base</span>[^](#43e8f7) - "modules/system-info/reporters/base.php" L20
```php
abstract class Base {
```

<span id="f-fdb5bf">WordPress</span>[^](#fdb5bf) - "modules/system-info/reporters/wordpress.php" L16
```php
class WordPress extends Base {
```

<span id="f-f7f6eb">User</span>[^](#f7f6eb) - "modules/system-info/reporters/user.php" L16
```php
class User extends Base {
```

<span id="f-53fc35">Theme</span>[^](#53fc35) - "modules/system-info/reporters/theme.php" L16
```php
class Theme extends Base {
```

<span id="f-5a692d">Server</span>[^](#5a692d) - "modules/system-info/reporters/server.php" L18
```php
class Server extends Base {
```

<span id="f-248dee">Base_Plugin</span>[^](#248dee) - "modules/system-info/reporters/base-plugin.php" L10
```php
abstract class Base_Plugin extends Base {
```

<span id="f-43ee9c">Plugins</span>[^](#43ee9c) - "modules/system-info/reporters/plugins.php" L18
```php
class Plugins extends Base_Plugin {
```

<span id="f-dd5269">MU_Plugins</span>[^](#dd5269) - "modules/system-info/reporters/mu-plugins.php" L16
```php
class MU_Plugins extends Base_Plugin {
```

<span id="f-47a48d">Network_Plugins</span>[^](#47a48d) - "modules/system-info/reporters/network-plugins.php" L16
```php
class Network_Plugins extends Base_Plugin {
```

<span id="f-a4112c">Base</span>[^](#a4112c) - "modules/system-info/reporters/base.php" L20
```php
abstract class Base {
```

<span id="f-ef7305">WordPress</span>[^](#ef7305) - "modules/system-info/reporters/wordpress.php" L16
```php
class WordPress extends Base {
```

<span id="f-3331d6">Base_Plugin</span>[^](#3331d6) - "modules/system-info/reporters/base-plugin.php" L10
```php
abstract class Base_Plugin extends Base {
```

<span id="f-c12238">Plugins</span>[^](#c12238) - "modules/system-info/reporters/plugins.php" L18
```php
class Plugins extends Base_Plugin {
```

<span id="f-a80747">get_fields</span>[^](#a80747) - "modules/compatibility-tag/compatibility-tag-report.php" L62
```php
	public function get_fields() {
```

<span id="f-c94621">get_title</span>[^](#c94621) - "modules/compatibility-tag/compatibility-tag-report.php" L53
```php
	public function get_title() {
```

<span id="f-78e9fb">get_fields</span>[^](#78e9fb) - "modules/compatibility-tag/compatibility-tag-report.php" L62
```php
	public function get_fields() {
```

<span id="f-8aa3e7">get_title</span>[^](#8aa3e7) - "modules/compatibility-tag/compatibility-tag-report.php" L53
```php
	public function get_title() {
```
