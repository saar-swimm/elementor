---
id: labs_5806f1
name: 09 -- Creating a Tab
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  core/kits/documents/tabs/global-colors.php: caf73e1991d2f05509a7132538cf9770fd349dff
  core/kits/documents/kit.php: e3fc54ff6375aac910b0a55a20a34d78ee182523
---

In this document, we will learn how to add a new Tab to the system.

A Tab is 🙋‍


When we create a new Tab, we create a class that inherits from `Tab_Base`[<sup id="7327db">↓</sup>](#f-7327db).

Some examples of `Tab_Base`[<sup id="7327db">↓</sup>](#f-7327db)s are `Global_Colors`[<sup id="3cca14">↓</sup>](#f-3cca14), `Global_Typography`[<sup id="47b300">↓</sup>](#f-47b300), `Settings_Layout`[<sup id="474883">↓</sup>](#f-474883), and `Settings_Background`[<sup id="8451ac">↓</sup>](#f-8451ac).

## TL;DR - How to Add a `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87)

1. Create a new class inheriting from `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87)&nbsp;
   - Place the file under `📄 core/kits/documents/tabs`,
     e.g. `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706) is defined in `📄 core/kits/documents/tabs/global-colors.php`.
2. Implement `get_icon`[<sup id="c897c9">↓</sup>](#f-c897c9), `get_group`[<sup id="471e5b">↓</sup>](#f-471e5b), `get_help_url`[<sup id="56476c">↓</sup>](#f-56476c), `get_id`[<sup id="f2c258">↓</sup>](#f-f2c258), `register_tab_controls`[<sup id="9ad79c">↓</sup>](#f-9ad79c), and `get_title`[<sup id="cb6bbc">↓</sup>](#f-cb6bbc).
3. Update `📄 core/kits/documents/kit.php`.
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706) for this example.

A `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706) is 🙋


## Steps to Adding a new `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87)
### 1\. Inherit from `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87).
All `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87)s are defined in files under `📄 core/kits/documents/tabs`.

<br/>

We first need to define our class in the relevant file, and inherit from `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87):
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





### 2\. Implement `get_icon`[<sup id="c897c9">↓</sup>](#f-c897c9), `get_group`[<sup id="471e5b">↓</sup>](#f-471e5b), `get_help_url`[<sup id="56476c">↓</sup>](#f-56476c), `get_id`[<sup id="f2c258">↓</sup>](#f-f2c258), `register_tab_controls`[<sup id="9ad79c">↓</sup>](#f-9ad79c), and `get_title`[<sup id="cb6bbc">↓</sup>](#f-cb6bbc)
The goal of `get_icon`[<sup id="9ae23d">↓</sup>](#f-9ae23d) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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

The goal of `get_group`[<sup id="5c2f65">↓</sup>](#f-5c2f65) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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

The goal of `get_help_url`[<sup id="44155b">↓</sup>](#f-44155b) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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

The goal of `get_id`[<sup id="dbc226">↓</sup>](#f-dbc226) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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

The goal of `register_tab_controls`[<sup id="c6b1ba">↓</sup>](#f-c6b1ba) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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

The goal of `get_title`[<sup id="5a4327">↓</sup>](#f-5a4327) is to 🙋.

<br/>

In this example, `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706), we 🙋
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
Every time we add a new `Tab_Base`[<sup id="3e7b87">↓</sup>](#f-3e7b87), we reference it in `📄 core/kits/documents/kit.php`.
We will still look at `Global_Colors`[<sup id="da2706">↓</sup>](#f-da2706) as our example.

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

<span id="f-3e7b87">Tab_Base</span>[^](#3e7b87) - "core/kits/documents/tabs/tab-base.php" L16
```php
abstract class Tab_Base extends Sub_Controls_Stack {
```

<span id="f-da2706">Global_Colors</span>[^](#da2706) - "core/kits/documents/tabs/global-colors.php" L12
```php
class Global_Colors extends Tab_Base {
```

<span id="f-7327db">Tab_Base</span>[^](#7327db) - "core/kits/documents/tabs/tab-base.php" L16
```php
abstract class Tab_Base extends Sub_Controls_Stack {
```

<span id="f-3cca14">Global_Colors</span>[^](#3cca14) - "core/kits/documents/tabs/global-colors.php" L12
```php
class Global_Colors extends Tab_Base {
```

<span id="f-47b300">Global_Typography</span>[^](#47b300) - "core/kits/documents/tabs/global-typography.php" L13
```php
class Global_Typography extends Tab_Base {
```

<span id="f-474883">Settings_Layout</span>[^](#474883) - "core/kits/documents/tabs/settings-layout.php" L15
```php
class Settings_Layout extends Tab_Base {
```

<span id="f-8451ac">Settings_Background</span>[^](#8451ac) - "core/kits/documents/tabs/settings-background.php" L11
```php
class Settings_Background extends Tab_Base {
```

<span id="f-c897c9">get_icon</span>[^](#c897c9) - "core/kits/documents/tabs/global-colors.php" L31
```php
	public function get_icon() {
```

<span id="f-471e5b">get_group</span>[^](#471e5b) - "core/kits/documents/tabs/global-colors.php" L27
```php
	public function get_group() {
```

<span id="f-56476c">get_help_url</span>[^](#56476c) - "core/kits/documents/tabs/global-colors.php" L35
```php
	public function get_help_url() {
```

<span id="f-f2c258">get_id</span>[^](#f2c258) - "core/kits/documents/tabs/global-colors.php" L19
```php
	public function get_id() {
```

<span id="f-9ad79c">register_tab_controls</span>[^](#9ad79c) - "core/kits/documents/tabs/global-colors.php" L39
```php
	protected function register_tab_controls() {
```

<span id="f-cb6bbc">get_title</span>[^](#cb6bbc) - "core/kits/documents/tabs/global-colors.php" L23
```php
	public function get_title() {
```

<span id="f-9ae23d">get_icon</span>[^](#9ae23d) - "core/kits/documents/tabs/global-colors.php" L31
```php
	public function get_icon() {
```

<span id="f-5c2f65">get_group</span>[^](#5c2f65) - "core/kits/documents/tabs/global-colors.php" L27
```php
	public function get_group() {
```

<span id="f-44155b">get_help_url</span>[^](#44155b) - "core/kits/documents/tabs/global-colors.php" L35
```php
	public function get_help_url() {
```

<span id="f-dbc226">get_id</span>[^](#dbc226) - "core/kits/documents/tabs/global-colors.php" L19
```php
	public function get_id() {
```

<span id="f-c6b1ba">register_tab_controls</span>[^](#c6b1ba) - "core/kits/documents/tabs/global-colors.php" L39
```php
	protected function register_tab_controls() {
```

<span id="f-5a4327">get_title</span>[^](#5a4327) - "core/kits/documents/tabs/global-colors.php" L23
```php
	public function get_title() {
```
