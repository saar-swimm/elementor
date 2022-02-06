---
id: labs_f8db8a
name: 03 -- Creating a Base
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  core/app/modules/import-export/directories/wp-content.php: ac73fde0dbc41f7188ee206372b852c60a5dbb4a
  readme.txt: 6bb5c9f784b944692b8f8fda6bc7ef3ae480c797
  core/app/modules/import-export/directories/root.php: 392e91d94c36ba716f86b6034aa5173d5dc25ab2
---

In this document, we will learn how to add a new Base to the system.

A Base is 🙋‍



Some examples of `Base`[<sup id="fbe2e3">↓</sup>](#f-fbe2e3)s are `Content`[<sup id="d2b64e">↓</sup>](#f-d2b64e), `Templates`[<sup id="c4425d">↓</sup>](#f-c4425d), `Frontend`[<sup id="056c8e">↓</sup>](#f-056c8e), and `Experiments_Reporter`[<sup id="0889d6">↓</sup>](#f-0889d6).

## TL;DR - How to Add a `Base`[<sup id="c9a119">↓</sup>](#f-c9a119)

1. Create a new class inheriting from `Base`[<sup id="c9a119">↓</sup>](#f-c9a119)&nbsp;
   - Place the file in one of the directories under `📄 core`,
     e.g. `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3) is defined in `📄 core/app/modules/import-export/directories/wp-content.php`.
2. Implement `get_name`[<sup id="8ab4b3">↓</sup>](#f-8ab4b3).
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3) for this example.

A `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3) is 🙋

<br/>

### `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3) Usage Example
For example, this is how `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3) can be used:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/import-export/directories/root.php
```
⬜ 111    		if ( in_array( 'content', $include, true ) ) {
⬜ 112    			$sub_directories[] = new Content( $this->iterator, $this );
⬜ 113    
🟩 114    			$sub_directories[] = new WP_Content( $this->iterator, $this );
⬜ 115    		}
⬜ 116    
⬜ 117    		return $sub_directories;
```

<br/>


## Steps to Adding a new `Base`[<sup id="c9a119">↓</sup>](#f-c9a119)
### 1\. Inherit from `Base`[<sup id="c9a119">↓</sup>](#f-c9a119).
All `Base`[<sup id="c9a119">↓</sup>](#f-c9a119)s are defined under `📄 core`.

<br/>

We first need to define our class in the relevant file, and inherit from `Base`[<sup id="c9a119">↓</sup>](#f-c9a119):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/import-export/directories/wp-content.php
```php
⬜ 9      	exit; // Exit if accessed directly
⬜ 10     }
⬜ 11     
🟩 12     class WP_Content extends Base {
⬜ 13     
⬜ 14     	protected function get_name() {
⬜ 15     		return 'wp-content';
```

<br/>





### 2\. Implement `get_name`[<sup id="8ab4b3">↓</sup>](#f-8ab4b3)
The goal of `get_name`[<sup id="f57dd8">↓</sup>](#f-f57dd8) is to 🙋.

<br/>

In this example, `WP_Content`[<sup id="ae10a3">↓</sup>](#f-ae10a3), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/app/modules/import-export/directories/wp-content.php
```php
⬜ 11     
⬜ 12     class WP_Content extends Base {
⬜ 13     
🟩 14     	protected function get_name() {
⬜ 15     		return 'wp-content';
⬜ 16     	}
⬜ 17     
```

<br/>



## Optionally, these snippets may be helpful 🙋


<br/>

Update `📄 readme.txt`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 427    * Experiment: Improved CSS Loading - Load widgets CSS only when needed ([#13533](https://github.com/elementor/elementor/issues/13533), [#8572](https://github.com/elementor/elementor/issues/8572))
⬜ 428    * Tweak: Added Animations CSS library to be loaded conditionally when needed when Improved Asset Load experiment is active ([#13533](https://github.com/elementor/elementor/issues/13533), [#8572](https://github.com/elementor/elementor/issues/8572))
⬜ 429    * Tweak: Added the ability to fetch Image from external URL ([#413](https://github.com/elementor/elementor/issues/413))
🟩 430    * Tweak: Added responsive capabilities to Content width in Section and Inner Section elements ([#12963](https://github.com/elementor/elementor/issues/12963))
⬜ 431    * Tweak: Added “Hidden Elements” User Preference control to choose whether to show or hide hidden elements in responsive mode ([#12316](https://github.com/elementor/elementor/issues/12316))
⬜ 432    * Tweak: Added User Preference control to set the default responsive device when the responsive view is triggered ([#14662](https://github.com/elementor/elementor/issues/14662))
⬜ 433    * Tweak: Added an Elementor top bar to all Elementor screens in the WordPress admin pages for better discoverability ([#15276](https://github.com/elementor/elementor/issues/15276), [#15250](https://github.com/elementor/elementor/issues/15250))
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 589    * Tweak: Added Lazy load option for YouTube in Video widget to prevent conflicts ([#13898](https://github.com/elementor/elementor/issues/13898))
⬜ 590    * Tweak: Allow overwriting the assets URL when using a mirror domain ([#13701](https://github.com/elementor/elementor/issues/13701))
⬜ 591    * Tweak: Removed deprecated `jQuery` functions for WP 5.7 compatibility
🟩 592    * Tweak: Added a `mixin` for `webkit-scrollbar` design in Table of Content widget CSS
⬜ 593    * Tweak: Added `--force` CLI replace command to always return the number of replaces
⬜ 594    * Tweak: Added a Lazy Load control for YouTube source in Background Video
⬜ 595    * Tweak: Updated `eicons` library to v5.11.0
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 628    * Tweak: Added "Custom" Columns Gap option in Section element ([#11978](https://github.com/elementor/elementor/issues/11978))
⬜ 629    * Tweak: Added Border Radius support in Google Maps widget ([#11359](https://github.com/elementor/elementor/issues/11359))
⬜ 630    * Tweak: Added dynamic capabilities to Tab Title control in Tabs widget ([#9710](https://github.com/elementor/elementor/issues/9710))
🟩 631    * Tweak: Added dynamic capabilities to Toggle Content control in Toggle widget ([#12405](https://github.com/elementor/elementor/issues/12405))
⬜ 632    * Tweak: Added `em` unit to Border Radius control in Button widget ([#11561](https://github.com/elementor/elementor/issues/11561))
⬜ 633    * Tweak: Introduced a new method for attaching a JS handler to an element ([Developer Documentation](https://developers.elementor.com/a-new-method-for-attaching-a-js-handler-to-an-element/))
⬜ 634    * Tweak: Added the option to add custom menu items in Site Settings ([Developer Documentation](https://github.com/elementor/elementor/pull/13243))
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1160   * Fix: Added better output escaping in the attributes for checkbox lists in Admin forms (Props [@MarieComet](https://github.com/MarieComet))
⬜ 1161   * Fix: Adding a link overrides the Title and Description colors in Testimonial widget
⬜ 1162   * Fix: Removed redundant Editor Panel Spacer in Image Carousel widget
🟩 1163   * Fix: "Delete All Content" doesn't close current widget editing options
⬜ 1164   * Fix: Pause on hover option doesn't work in Image Carousel widget
⬜ 1165   * Fix: Limit transition duration in Ken Burns CSS only to `transform` property
⬜ 1166   * Fix: Recommended tab icons don't change when there's more than one `Icons` control per widget
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1314   * Tweak: Added icon alignment option to icon list ([#8219](https://github.com/elementor/elementor/issues/8219))
⬜ 1315   * Tweak: Added option to hide columns in Navigator ([#7863](https://github.com/elementor/elementor/issues/7863))
⬜ 1316   * Tweak: Added vertical alignment option to Image Carousel ([#6963](https://github.com/elementor/elementor/issues/6963))
🟩 1317   * Tweak: Added Responsive option for the Content Align in Column ([#2554](https://github.com/elementor/elementor/issues/2554))
⬜ 1318   * Tweak: Removed `Prevent Scroll` option from Google Maps widget which now defaults in the map origin ([#8244](https://github.com/elementor/elementor/issues/8244))
⬜ 1319   * Tweak: Reduce-motion accessibility support for CSS animation library ([#7968](https://github.com/elementor/elementor/issues/7968))
⬜ 1320   * Tweak: Added start & end time for self-hosted background video ([#7941](https://github.com/elementor/elementor/issues/7941))
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1334   * Tweak: Using `application/json` content type in order to avoid double zipping by the server to reduce load panel errors
⬜ 1335   * Tweak: Added control to support Exit Animations
⬜ 1336   * Tweak: Added editor notices bar for admin role only
🟩 1337   * Tweak: Moved elements PHP handles to JS - resolves double Editing Handles in the Post Content widget
⬜ 1338   * Tweak: Added custom messages for "Preview could not be loaded" state
⬜ 1339   * Tweak: Added focus state emphasis to Dimensions control
⬜ 1340   * Tweak: Redesigned Media control
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1456   * Tweak: Added vw unit support for Typography size control
⬜ 1457   * Tweak: Added vw unit support for Custom Min. Height control in section
⬜ 1458   * Tweak: Added overflow option for section
🟩 1459   * Tweak: Renamed `Content Position` control to `Vertical Align` in column layout
⬜ 1460   * Tweak: Renamed `Scrolling Effects` section to `Motion Effects`
⬜ 1461   * Tweak: Added Dynamic capabilities to Inner Section CSS class and CSS ID ([#6779](https://github.com/elementor/elementor/issues/6779))
⬜ 1462   * Tweak: Added Dynamic capabilities to Section CSS class and CSS ID ([#6779](https://github.com/elementor/elementor/issues/6779))
```

<br/>


<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-c9a119">Base</span>[^](#c9a119) - "core/app/modules/import-export/directories/base.php" L12
```php
abstract class Base {
```

<span id="f-ae10a3">WP_Content</span>[^](#ae10a3) - "core/app/modules/import-export/directories/wp-content.php" L12
```php
class WP_Content extends Base {
```

<span id="f-fbe2e3">Base</span>[^](#fbe2e3) - "core/app/modules/import-export/directories/base.php" L12
```php
abstract class Base {
```

<span id="f-d2b64e">Content</span>[^](#d2b64e) - "core/app/modules/import-export/directories/content.php" L11
```php
class Content extends Base {
```

<span id="f-c4425d">Templates</span>[^](#c4425d) - "core/app/modules/import-export/directories/templates.php" L13
```php
class Templates extends Base {
```

<span id="f-056c8e">Frontend</span>[^](#056c8e) - "core/responsive/files/frontend.php" L14
```php
class Frontend extends Base {
```

<span id="f-0889d6">Experiments_Reporter</span>[^](#0889d6) - "core/experiments/experiments-reporter.php" L13
```php
class Experiments_Reporter extends Base {
```

<span id="f-8ab4b3">get_name</span>[^](#8ab4b3) - "core/app/modules/import-export/directories/wp-content.php" L14
```php
	protected function get_name() {
```

<span id="f-f57dd8">get_name</span>[^](#f57dd8) - "core/app/modules/import-export/directories/wp-content.php" L14
```php
	protected function get_name() {
```
