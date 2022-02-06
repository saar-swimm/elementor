---
id: labs_f84e60
name: 01 -- How to Add a Sub Controls Stack
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  core/kits/documents/tabs/global-colors.php: caf73e1991d2f05509a7132538cf9770fd349dff
  core/kits/documents/kit.php: e3fc54ff6375aac910b0a55a20a34d78ee182523
---
# 01 -- How to Add a Sub Controls Stack

Understanding Sub Controls Stacks, how they work, and how to add new ones, is important - and this document will describe just that.

A Sub Controls Stack is 🙋‍



Some examples of `Sub_Controls_Stack`[<sup id="ab63ad">↓</sup>](#f-ab63ad)s are `Global_Colors`[<sup id="997e17">↓</sup>](#f-997e17), `Global_Typography`[<sup id="2d0997">↓</sup>](#f-2d0997), `Skin_Base`[<sup id="024691">↓</sup>](#f-024691), and `Settings_Layout`[<sup id="dcab73">↓</sup>](#f-dcab73).
Note: some of these examples inherit indirectly from `Sub_Controls_Stack`[<sup id="ab63ad">↓</sup>](#f-ab63ad).
> **NOTE: Inherit from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e)**
>
> Most `Sub_Controls_Stack`[<sup id="ab63ad">↓</sup>](#f-ab63ad)s inherit directly from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e) and almost none inherit directly from `Sub_Controls_Stack`[<sup id="ab63ad">↓</sup>](#f-ab63ad).
> In this document we demonstrate inheriting from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e).

## TL;DR - How to Add a `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e)

1. Create a new class inheriting from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e)&nbsp;
   - Place the file under `📄 core/kits/documents/tabs`,
     e.g. `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853) is defined in `📄 core/kits/documents/tabs/global-colors.php`.
2. Implement `get_icon`[<sup id="3e1380">↓</sup>](#f-3e1380), `get_group`[<sup id="21018a">↓</sup>](#f-21018a), `get_help_url`[<sup id="887f1b">↓</sup>](#f-887f1b), `get_id`[<sup id="9386d6">↓</sup>](#f-9386d6), `register_tab_controls`[<sup id="40e223">↓</sup>](#f-40e223), and `get_title`[<sup id="09d6d2">↓</sup>](#f-09d6d2).
3. Update `📄 core/kits/documents/kit.php`.
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853) for this example.

A `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853) is 🙋


## Steps to Adding a new `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e)
### 1\. Inherit from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e).
All `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e)s are defined in files under `📄 core/kits/documents/tabs`.

<br/>

We first need to define our class in the relevant file, and inherit from `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 9      	exit; // Exit if accessed directly
⬜ 10     }
⬜ 11     
🟩 12     class Global_Colors extends Tab_Base {
⬜ 13     
⬜ 14     	const COLOR_PRIMARY = 'globals/colors?id=primary';
⬜ 15     	const COLOR_SECONDARY = 'globals/colors?id=secondary';
```

<br/>





### 2\. Implement `get_icon`[<sup id="3e1380">↓</sup>](#f-3e1380), `get_group`[<sup id="21018a">↓</sup>](#f-21018a), `get_help_url`[<sup id="887f1b">↓</sup>](#f-887f1b), `get_id`[<sup id="9386d6">↓</sup>](#f-9386d6), `register_tab_controls`[<sup id="40e223">↓</sup>](#f-40e223), and `get_title`[<sup id="09d6d2">↓</sup>](#f-09d6d2)
The goal of `get_icon`[<sup id="ac1660">↓</sup>](#f-ac1660) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 28     		return 'global';
⬜ 29     	}
⬜ 30     
🟩 31     	public function get_icon() {
⬜ 32     		return 'eicon-global-colors';
⬜ 33     	}
⬜ 34     
```

<br/>

The goal of `get_group`[<sup id="fb8d85">↓</sup>](#f-fb8d85) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 24     		return esc_html__( 'Global Colors', 'elementor' );
⬜ 25     	}
⬜ 26     
🟩 27     	public function get_group() {
⬜ 28     		return 'global';
⬜ 29     	}
⬜ 30     
```

<br/>

The goal of `get_help_url`[<sup id="c477f0">↓</sup>](#f-c477f0) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 32     		return 'eicon-global-colors';
⬜ 33     	}
⬜ 34     
🟩 35     	public function get_help_url() {
⬜ 36     		return 'https://go.elementor.com/global-colors';
⬜ 37     	}
⬜ 38     
```

<br/>

The goal of `get_id`[<sup id="081163">↓</sup>](#f-081163) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 16     	const COLOR_TEXT = 'globals/colors?id=text';
⬜ 17     	const COLOR_ACCENT = 'globals/colors?id=accent';
⬜ 18     
🟩 19     	public function get_id() {
⬜ 20     		return 'global-colors';
⬜ 21     	}
⬜ 22     
```

<br/>

The goal of `register_tab_controls`[<sup id="3386bf">↓</sup>](#f-3386bf) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 36     		return 'https://go.elementor.com/global-colors';
⬜ 37     	}
⬜ 38     
🟩 39     	protected function register_tab_controls() {
⬜ 40     		$this->start_controls_section(
⬜ 41     			'section_global_colors',
⬜ 42     			[
```

<br/>

The goal of `get_title`[<sup id="34ecba">↓</sup>](#f-34ecba) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/global-colors.php
```php
⬜ 20     		return 'global-colors';
⬜ 21     	}
⬜ 22     
🟩 23     	public function get_title() {
⬜ 24     		return esc_html__( 'Global Colors', 'elementor' );
⬜ 25     	}
⬜ 26     
```

<br/>


## Update `📄 core/kits/documents/kit.php`
Every time we add a new `Tab_Base`[<sup id="c1bf0e">↓</sup>](#f-c1bf0e), we reference it in `📄 core/kits/documents/kit.php`.
We will still look at `Global_Colors`[<sup id="ab5853">↓</sup>](#f-ab5853) as our example.

<br/>

 <!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/kit.php
```
⬜ 212    	 */
⬜ 213    	private function register_tabs() {
⬜ 214    		$tabs = [
🟩 215    			'global-colors' => Tabs\Global_Colors::class,
⬜ 216    			'global-typography' => Tabs\Global_Typography::class,
⬜ 217    			'theme-style-typography' => Tabs\Theme_Style_Typography::class,
⬜ 218    			'theme-style-buttons' => Tabs\Theme_Style_Buttons::class,
```

<br/>



<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-c1bf0e">Tab_Base</span>[^](#c1bf0e) - "core/kits/documents/tabs/tab-base.php" L16
```php
abstract class Tab_Base extends Sub_Controls_Stack {
```

<span id="f-ab5853">Global_Colors</span>[^](#ab5853) - "core/kits/documents/tabs/global-colors.php" L12
```php
class Global_Colors extends Tab_Base {
```

<span id="f-ab63ad">Sub_Controls_Stack</span>[^](#ab63ad) - "includes/base/sub-controls-stack.php" L15
```php
abstract class Sub_Controls_Stack {
```

<span id="f-997e17">Global_Colors</span>[^](#997e17) - "core/kits/documents/tabs/global-colors.php" L12
```php
class Global_Colors extends Tab_Base {
```

<span id="f-2d0997">Global_Typography</span>[^](#2d0997) - "core/kits/documents/tabs/global-typography.php" L13
```php
class Global_Typography extends Tab_Base {
```

<span id="f-024691">Skin_Base</span>[^](#024691) - "includes/base/skin-base.php" L20
```php
abstract class Skin_Base extends Sub_Controls_Stack {
```

<span id="f-dcab73">Settings_Layout</span>[^](#dcab73) - "core/kits/documents/tabs/settings-layout.php" L15
```php
class Settings_Layout extends Tab_Base {
```

<span id="f-3e1380">get_icon</span>[^](#3e1380) - "core/kits/documents/tabs/global-colors.php" L31
```php
	public function get_icon() {
```

<span id="f-21018a">get_group</span>[^](#21018a) - "core/kits/documents/tabs/global-colors.php" L27
```php
	public function get_group() {
```

<span id="f-887f1b">get_help_url</span>[^](#887f1b) - "core/kits/documents/tabs/global-colors.php" L35
```php
	public function get_help_url() {
```

<span id="f-9386d6">get_id</span>[^](#9386d6) - "core/kits/documents/tabs/global-colors.php" L19
```php
	public function get_id() {
```

<span id="f-40e223">register_tab_controls</span>[^](#40e223) - "core/kits/documents/tabs/global-colors.php" L39
```php
	protected function register_tab_controls() {
```

<span id="f-09d6d2">get_title</span>[^](#09d6d2) - "core/kits/documents/tabs/global-colors.php" L23
```php
	public function get_title() {
```

<span id="f-ac1660">get_icon</span>[^](#ac1660) - "core/kits/documents/tabs/global-colors.php" L31
```php
	public function get_icon() {
```

<span id="f-fb8d85">get_group</span>[^](#fb8d85) - "core/kits/documents/tabs/global-colors.php" L27
```php
	public function get_group() {
```

<span id="f-c477f0">get_help_url</span>[^](#c477f0) - "core/kits/documents/tabs/global-colors.php" L35
```php
	public function get_help_url() {
```

<span id="f-081163">get_id</span>[^](#081163) - "core/kits/documents/tabs/global-colors.php" L19
```php
	public function get_id() {
```

<span id="f-3386bf">register_tab_controls</span>[^](#3386bf) - "core/kits/documents/tabs/global-colors.php" L39
```php
	protected function register_tab_controls() {
```

<span id="f-34ecba">get_title</span>[^](#34ecba) - "core/kits/documents/tabs/global-colors.php" L23
```php
	public function get_title() {
```
