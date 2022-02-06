---
id: labs_f783a2
name: 10 -- How to Add a Category
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  includes/plugin.php: 1509fbac25bbcf104be71a2611e74d59740cdffc
  includes/settings/settings.php: 76e3ab29a3073c59598e6f788006eee12f75b001
  core/common/modules/finder/categories/tools.php: 450909345574ea0609bd49dbecc0e2070a6e26a1
  core/kits/manager.php: 4d0953cd434a63fc4969c0fd28df4f36ce13b142
  includes/settings/tools.php: d2c1530f898e0b9a961d44b860a2e14439998841
  modules/landing-pages/module.php: 372709df129b693bf8df6348dbdaae74dad49956
  readme.txt: 6bb5c9f784b944692b8f8fda6bc7ef3ae480c797
  assets/dev/js/editor/controls/color.js: 6fdc6d53fbb4b51cba45e5d1df4ade484e5884e1
---

This document describes what a Category is and how to create a new one.

A Category is 🙋‍


To add a new Category, we create a class that inherits from `Base_Category`[<sup id="8a4913">↓</sup>](#f-8a4913).

Some examples of `Base_Category`[<sup id="8a4913">↓</sup>](#f-8a4913)s are `Settings`[<sup id="ad4779">↓</sup>](#f-ad4779), `Create`[<sup id="e8ee82">↓</sup>](#f-e8ee82), `Site`[<sup id="0dc8c3">↓</sup>](#f-0dc8c3), and `Tools`[<sup id="a7a625">↓</sup>](#f-a7a625).

## TL;DR - How to Add a `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c)

1. Create a new class inheriting from `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c)&nbsp;
   - Place the file under `📄 core/common/modules/finder/categories`,
     e.g. `Tools`[<sup id="551a44">↓</sup>](#f-551a44) is defined in `📄 core/common/modules/finder/categories/tools.php`.
2. Implement `get_id`[<sup id="1a3c7e">↓</sup>](#f-1a3c7e), `get_category_items`[<sup id="1fecb5">↓</sup>](#f-1fecb5), and `get_title`[<sup id="5fd926">↓</sup>](#f-5fd926).
3. Update `📄 includes/settings/tools.php`.
3. Update `📄 readme.txt`.
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Tools`[<sup id="551a44">↓</sup>](#f-551a44) for this example.

A `Tools`[<sup id="551a44">↓</sup>](#f-551a44) is 🙋

<br/>

### `Tools`[<sup id="551a44">↓</sup>](#f-551a44) Usage Example
For example, this is how `Tools`[<sup id="551a44">↓</sup>](#f-551a44) can be used:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/plugin.php
```
⬜ 710    		$this->assets_manager = new Assets_Manager();
⬜ 711    		$this->icons_manager = new Icons_Manager();
⬜ 712    		$this->settings = new Settings();
🟩 713    		$this->tools = new Tools();
⬜ 714    		$this->editor = new Editor();
⬜ 715    		$this->preview = new Preview();
⬜ 716    		$this->frontend = new Frontend();
```

<br/>


## Steps to Adding a new `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c)
### 1\. Inherit from `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c).
All `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c)s are defined in files under `📄 core/common/modules/finder/categories`.

<br/>

We first need to define our class in the relevant file, and inherit from `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/common/modules/finder/categories/tools.php
```php
⬜ 14      *
⬜ 15      * Provides items related to Elementor's tools.
⬜ 16      */
🟩 17     class Tools extends Base_Category {
⬜ 18     
⬜ 19     	/**
⬜ 20     	 * Get title.
```

<br/>





### 2\. Implement `get_id`[<sup id="1a3c7e">↓</sup>](#f-1a3c7e), `get_category_items`[<sup id="1fecb5">↓</sup>](#f-1fecb5), and `get_title`[<sup id="5fd926">↓</sup>](#f-5fd926)
The goal of `get_id`[<sup id="a14a37">↓</sup>](#f-a14a37) is to 🙋.

<br/>

In this example, `Tools`[<sup id="551a44">↓</sup>](#f-551a44), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/common/modules/finder/categories/tools.php
```php
⬜ 28     		return esc_html__( 'Tools', 'elementor' );
⬜ 29     	}
⬜ 30     
🟩 31     	public function get_id() {
⬜ 32     		return 'tools';
⬜ 33     	}
⬜ 34     
```

<br/>

The goal of `get_category_items`[<sup id="ff3110">↓</sup>](#f-ff3110) is to 🙋.

<br/>

In this example, `Tools`[<sup id="551a44">↓</sup>](#f-551a44), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/common/modules/finder/categories/tools.php
```php
⬜ 42     	 *
⬜ 43     	 * @return array
⬜ 44     	 */
🟩 45     	public function get_category_items( array $options = [] ) {
⬜ 46     		$tools_url = ElementorTools::get_url();
⬜ 47     
⬜ 48     		$items = [
```

<br/>

The goal of `get_title`[<sup id="03579b">↓</sup>](#f-03579b) is to 🙋.

<br/>

In this example, `Tools`[<sup id="551a44">↓</sup>](#f-551a44), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/common/modules/finder/categories/tools.php
```php
⬜ 24     	 *
⬜ 25     	 * @return string
⬜ 26     	 */
🟩 27     	public function get_title() {
⬜ 28     		return esc_html__( 'Tools', 'elementor' );
⬜ 29     	}
⬜ 30     
```

<br/>


## Update additional files with the new class
Every time we add a new `Base_Category`[<sup id="14204c">↓</sup>](#f-14204c), we reference it in a few locations.
We will still look at `Tools`[<sup id="551a44">↓</sup>](#f-551a44) as our example.

<br/>

 3\. Add the new class to `📄 includes/settings/tools.php`, for example:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/tools.php
```
⬜ 8      }
⬜ 9      
⬜ 10     /**
🟩 11      * Elementor "Tools" page in WordPress Dashboard.
⬜ 12      *
⬜ 13      * Elementor settings page handler class responsible for creating and displaying
🟩 14      * Elementor "Tools" page in WordPress dashboard.
⬜ 15      *
⬜ 16      * @since 1.0.0
⬜ 17      */
🟩 18     class Tools extends Settings_Page {
⬜ 19     
⬜ 20     	/**
⬜ 21     	 * Settings page ID for Elementor tools.
```

<br/>

In addition, in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/tools.php
```
⬜ 25     	/**
⬜ 26     	 * Register admin menu.
⬜ 27     	 *
🟩 28     	 * Add new Elementor Tools admin menu.
⬜ 29     	 *
⬜ 30     	 * Fired by `admin_menu` action.
⬜ 31     	 *
```

<br/>

Also in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/tools.php
```
⬜ 35     	public function register_admin_menu() {
⬜ 36     		add_submenu_page(
⬜ 37     			Settings::PAGE_ID,
🟩 38     			__( 'Tools', 'elementor' ),
🟩 39     			__( 'Tools', 'elementor' ),
⬜ 40     			'manage_options',
⬜ 41     			self::PAGE_ID,
⬜ 42     			[ $this, 'display_settings_page' ]
```

<br/>

Also notice in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/tools.php
```
⬜ 160    	}
⬜ 161    
⬜ 162    	/**
🟩 163    	 * Tools page constructor.
⬜ 164    	 *
🟩 165    	 * Initializing Elementor "Tools" page.
⬜ 166    	 *
⬜ 167    	 * @since 1.0.0
⬜ 168    	 * @access public
```

<br/>

Still in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/tools.php
```
⬜ 396    	 * @since 1.5.0
⬜ 397    	 * @access protected
⬜ 398    	 *
🟩 399    	 * @return string Tools page title.
⬜ 400    	 */
⬜ 401    	protected function get_page_title() {
🟩 402    		return __( 'Tools', 'elementor' );
⬜ 403    	}
⬜ 404    
⬜ 405    	/**
```

<br/>

 4\. We modify  `📄 readme.txt`, as we do with `Tools`[<sup id="551a44">↓</sup>](#f-551a44) here:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 712    * Fix: 'description' is not supported in the color control ([#12747](https://github.com/elementor/elementor/issues/12747))
⬜ 713    * Fix: Some Shape Dividers overlap other elements since Chrome 85 ([#12393](https://github.com/elementor/elementor/issues/12393))
⬜ 714    * Fix: Image preview area disappears when 'label_block' is `false` in Media Control ([#11756](https://github.com/elementor/elementor/issues/11756))
🟩 715    * Fix: Missing compatibility for Advanced Editor Tools (previously TinyMCE Advanced) ([#12768](https://github.com/elementor/elementor/issues/12768))
⬜ 716    * Fix: Different panel tab is shown when panel tab includes only sections with display conditions that are unmet ([#12658](https://github.com/elementor/elementor/issues/12658))
⬜ 717    * Fix: Default Generic Fonts are not printed along with a global value ([#12410](https://github.com/elementor/elementor/issues/12410))
⬜ 718    * Fix: Remove source map comment to prevent 404 console warning ([Topic](https://wordpress.org/support/topic/issue-with-picker-js-map))
```

<br/>

Additionally in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 readme.txt
```
⬜ 1752   
⬜ 1753   = 2.1.3 - 2018-07-16 =
⬜ 1754   * Tweak: Added CSS filter control for Map, Video, Section and Column
🟩 1755   * Tweak: Added Inspector option in Tools page
⬜ 1756   * Tweak: Added Inspector log for Canvas & Full Width templates
⬜ 1757   * Tweak: The preview is now loading via plain URL to avoid errors in some server configurations
⬜ 1758   * Tweak: Added `print_elements_with_wrapper` method to allow a document to overwrite it's wrapper
```

<br/>


## Optionally, these snippets may be helpful 🙋


<br/>

Update `📄 core/kits/manager.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/manager.php
```
⬜ 126    	}
⬜ 127    
⬜ 128    	/**
🟩 129    	 * Create a default kit if needed.
⬜ 130    	 *
⬜ 131    	 * This action runs on activation hook, all the Plugin components do not exists and
⬜ 132    	 * the Document manager and Kits manager instances cannot be used.
```

<br/>

Update `📄 includes/settings/settings.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/settings.php
```
⬜ 248    	 */
⬜ 249    	public function elementor_getting_started() {
⬜ 250    		if ( User::is_current_user_can_edit_post_type( 'page' ) ) {
🟩 251    			$create_new_label = esc_html__( 'Create Your First Page', 'elementor' );
⬜ 252    			$create_new_cpt = 'page';
⬜ 253    		} elseif ( User::is_current_user_can_edit_post_type( 'post' ) ) {
⬜ 254    			$create_new_label = esc_html__( 'Create Your First Post', 'elementor' );
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/settings.php
```
⬜ 251    			$create_new_label = esc_html__( 'Create Your First Page', 'elementor' );
⬜ 252    			$create_new_cpt = 'page';
⬜ 253    		} elseif ( User::is_current_user_can_edit_post_type( 'post' ) ) {
🟩 254    			$create_new_label = esc_html__( 'Create Your First Post', 'elementor' );
⬜ 255    			$create_new_cpt = 'post';
⬜ 256    		}
⬜ 257    
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/settings/settings.php
```
⬜ 430    	}
⬜ 431    
⬜ 432    	/**
🟩 433    	 * Create tabs.
⬜ 434    	 *
⬜ 435    	 * Return the settings page tabs, sections and fields.
⬜ 436    	 *
```

<br/>

Update `📄 modules/landing-pages/module.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/landing-pages/module.php
```
⬜ 136    	private function add_submenu_page() {
⬜ 137    		$posts = $this->get_landing_page_posts();
⬜ 138    
🟩 139    		// If there are no Landing Pages, show the "Create Your First Landing Page" page.
⬜ 140    		// If there are, show the pages table.
⬜ 141    		if ( ! empty( $posts ) ) {
⬜ 142    			$landing_page_menu_slug = self::ADMIN_PAGE_SLUG;
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 modules/landing-pages/module.php
```
⬜ 339    			return;
⬜ 340    		}
⬜ 341    
🟩 342    		// Create the post types property as an array and include the landing pages CPT in it.
⬜ 343    		$query_post_types = [ 'post', 'page', self::CPT ];
⬜ 344    
⬜ 345    		// Since WordPress determined this is supposed to be a page, we'll pre-set the post_type query arg to make sure
```

<br/>

Update `📄 assets/dev/js/editor/controls/color.js`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 assets/dev/js/editor/controls/color.js
```
⬜ 199    		return result.data;
⬜ 200    	}
⬜ 201    
🟩 202    	// Create the markup for the colors in the global select dropdown.
⬜ 203    	buildGlobalsList( globalColors, $globalPreviewItemsContainer ) {
⬜ 204    		Object.values( globalColors ).forEach( ( color ) => {
⬜ 205    			if ( ! color.value ) {
```

<br/>


<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-14204c">Base_Category</span>[^](#14204c) - "core/common/modules/finder/base-category.php" L17
```php
abstract class Base_Category extends Base_Object {
```

<span id="f-551a44">Tools</span>[^](#551a44) - "core/common/modules/finder/categories/tools.php" L17
```php
class Tools extends Base_Category {
```

<span id="f-8a4913">Base_Category</span>[^](#8a4913) - "core/common/modules/finder/base-category.php" L17
```php
abstract class Base_Category extends Base_Object {
```

<span id="f-ad4779">Settings</span>[^](#ad4779) - "core/common/modules/finder/categories/settings.php" L17
```php
class Settings extends Base_Category {
```

<span id="f-e8ee82">Create</span>[^](#e8ee82) - "core/common/modules/finder/categories/create.php" L16
```php
class Create extends Base_Category {
```

<span id="f-0dc8c3">Site</span>[^](#0dc8c3) - "core/common/modules/finder/categories/site.php" L15
```php
class Site extends Base_Category {
```

<span id="f-a7a625">Tools</span>[^](#a7a625) - "core/common/modules/finder/categories/tools.php" L17
```php
class Tools extends Base_Category {
```

<span id="f-1a3c7e">get_id</span>[^](#1a3c7e) - "core/common/modules/finder/categories/tools.php" L31
```php
	public function get_id() {
```

<span id="f-1fecb5">get_category_items</span>[^](#1fecb5) - "core/common/modules/finder/categories/tools.php" L45
```php
	public function get_category_items( array $options = [] ) {
```

<span id="f-5fd926">get_title</span>[^](#5fd926) - "core/common/modules/finder/categories/tools.php" L27
```php
	public function get_title() {
```

<span id="f-a14a37">get_id</span>[^](#a14a37) - "core/common/modules/finder/categories/tools.php" L31
```php
	public function get_id() {
```

<span id="f-ff3110">get_category_items</span>[^](#ff3110) - "core/common/modules/finder/categories/tools.php" L45
```php
	public function get_category_items( array $options = [] ) {
```

<span id="f-03579b">get_title</span>[^](#03579b) - "core/common/modules/finder/categories/tools.php" L27
```php
	public function get_title() {
```
