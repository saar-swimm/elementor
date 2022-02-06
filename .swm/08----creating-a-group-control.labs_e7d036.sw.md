---
id: labs_e7d036
name: 08 -- Creating a Group Control
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  includes/controls/groups/css-filter.php: a7e84920dffb93e3f62ed8d246c618d9265df6f6
  includes/elements/column.php: 65810ac8f46cdea96f139a71dc1feeb0dc6469d1
  core/kits/documents/tabs/theme-style-buttons.php: 1e8ad749c704b1a61d94bed955c913c18033c217
  includes/elements/section.php: 66a39922ebfef58014a57a26aa237a149ec492e4
  includes/widgets/image.php: 249949350c08633ea8e99539e31d3f9146ce7041
  includes/widgets/button.php: 012ee36d0c5ab57f52ccc2c2303ba0580373dc72
---
# 08 -- Creating a Group Control

This document covers how to create a new Group Control.

A Group Control is 🙋‍


To create a new Group Control, we create a class that inherits from `Group_Control_Base`[<sup id="728fdb">↓</sup>](#f-728fdb).

Some examples of `Group_Control_Base`[<sup id="728fdb">↓</sup>](#f-728fdb)s are `Group_Control_Typography`[<sup id="36db2a">↓</sup>](#f-36db2a), `Group_Control_Text_Shadow`[<sup id="8c8df1">↓</sup>](#f-8c8df1), `Group_Control_Border`[<sup id="552bb2">↓</sup>](#f-552bb2), and `Group_Control_Background`[<sup id="7e697a">↓</sup>](#f-7e697a).

## TL;DR - How to Add a `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594)

1. Create a new class inheriting from `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594)&nbsp;
   - Place the file under `📄 includes/controls/groups`,
     e.g. `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d) is defined in `📄 includes/controls/groups/css-filter.php`.
2. Define `fields`[<sup id="3a119f">↓</sup>](#f-3a119f).
2. Implement `get_type`[<sup id="334392">↓</sup>](#f-334392), `init_fields`[<sup id="05f738">↓</sup>](#f-05f738), and `get_default_options`[<sup id="09bfa0">↓</sup>](#f-09bfa0).
3. Update `📄 includes/widgets/image.php`.
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d) for this example.

A `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d) is 🙋


## Steps to Adding a new `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594)
### 1\. Inherit from `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594).
All `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594)s are defined in files under `📄 includes/controls/groups`.

<br/>

We first need to define our class in the relevant file, and inherit from `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/groups/css-filter.php
```php
⬜ 14      *
⬜ 15      * @since 2.1.0
⬜ 16      */
🟩 17     class Group_Control_Css_Filter extends Group_Control_Base {
⬜ 18     
⬜ 19     	/**
⬜ 20     	 * Prepare fields.
```

<br/>


> **Note**: the class name should start with "Group_Control_".


### 2\. Define `fields`[<sup id="3a119f">↓</sup>](#f-3a119f)
Every `Group_Control_Base`[<sup id="728fdb">↓</sup>](#f-728fdb) should define this variable:
- `fields`[<sup id="3a119f">↓</sup>](#f-3a119f): 🙋‍

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/groups/css-filter.php
```php
⬜ 28     	 *
⬜ 29     	 * @return array Processed fields.
⬜ 30     	 */
🟩 31     	protected static $fields;
⬜ 32     
⬜ 33     	/**
⬜ 34     	 * Get CSS filter control type.
```

<br/>


### 3\. Implement `get_type`[<sup id="334392">↓</sup>](#f-334392), `init_fields`[<sup id="05f738">↓</sup>](#f-05f738), and `get_default_options`[<sup id="09bfa0">↓</sup>](#f-09bfa0)
The goal of `get_type`[<sup id="8c951b">↓</sup>](#f-8c951b) is to 🙋.

<br/>

In this example, `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/groups/css-filter.php
```php
⬜ 41     	 *
⬜ 42     	 * @return string Control type.
⬜ 43     	 */
🟩 44     	public static function get_type() {
⬜ 45     		return 'css-filter';
⬜ 46     	}
⬜ 47     
```

<br/>

The goal of `init_fields`[<sup id="4ce369">↓</sup>](#f-4ce369) is to 🙋.

<br/>

In this example, `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/groups/css-filter.php
```php
⬜ 55     	 *
⬜ 56     	 * @return array Control fields.
⬜ 57     	 */
🟩 58     	protected function init_fields() {
⬜ 59     		$controls = [];
⬜ 60     
⬜ 61     		$controls['blur'] = [
```

<br/>

The goal of `get_default_options`[<sup id="f8672a">↓</sup>](#f-f8672a) is to 🙋.

<br/>

In this example, `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/groups/css-filter.php
```php
⬜ 159    	 *
⬜ 160    	 * @return array Default CSS filter control options.
⬜ 161    	 */
🟩 162    	protected function get_default_options() {
⬜ 163    		return [
⬜ 164    			'popover' => [
⬜ 165    				'starter_name' => 'css_filter',
```

<br/>


## Update `📄 includes/widgets/image.php`
Every time we add a new `Group_Control_Base`[<sup id="2a4594">↓</sup>](#f-2a4594), we reference it in `📄 includes/widgets/image.php`.
We will still look at `Group_Control_Css_Filter`[<sup id="02796d">↓</sup>](#f-02796d) as our example.

<br/>

 <!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/widgets/image.php
```
⬜ 406    		);
⬜ 407    
⬜ 408    		$this->add_group_control(
🟩 409    			Group_Control_Css_Filter::get_type(),
⬜ 410    			[
⬜ 411    				'name' => 'css_filters',
⬜ 412    				'selector' => '{{WRAPPER}} img',
```

<br/>

Also notice in the same file:
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/widgets/image.php
```
⬜ 440    		);
⬜ 441    
⬜ 442    		$this->add_group_control(
🟩 443    			Group_Control_Css_Filter::get_type(),
⬜ 444    			[
⬜ 445    				'name' => 'css_filters_hover',
⬜ 446    				'selector' => '{{WRAPPER}}:hover img',
```

<br/>


## Optionally, these snippets may be helpful 🙋


<br/>

Update `📄 core/kits/documents/tabs/theme-style-buttons.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/theme-style-buttons.php
```
⬜ 4      
⬜ 5      use Elementor\Controls_Manager;
⬜ 6      use Elementor\Group_Control_Background;
🟩 7      use Elementor\Group_Control_Border;
⬜ 8      use Elementor\Group_Control_Box_Shadow;
⬜ 9      use Elementor\Group_Control_Text_Shadow;
⬜ 10     use Elementor\Group_Control_Typography;
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/theme-style-buttons.php
```
⬜ 135    		);
⬜ 136    
⬜ 137    		$this->add_group_control(
🟩 138    			Group_Control_Border::get_type(),
⬜ 139    			[
⬜ 140    				'name' => 'button_border',
⬜ 141    				'selector' => $button_selector,
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 core/kits/documents/tabs/theme-style-buttons.php
```
⬜ 210    		);
⬜ 211    
⬜ 212    		$this->add_group_control(
🟩 213    			Group_Control_Border::get_type(),
⬜ 214    			[
⬜ 215    				'name' => 'button_hover_border',
⬜ 216    				'selector' => $button_hover_selector,
```

<br/>

Update `📄 includes/widgets/button.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/widgets/button.php
```
⬜ 406    		$this->end_controls_tabs();
⬜ 407    
⬜ 408    		$this->add_group_control(
🟩 409    			Group_Control_Border::get_type(),
⬜ 410    			[
⬜ 411    				'name' => 'border',
⬜ 412    				'selector' => '{{WRAPPER}} .elementor-button',
```

<br/>

Update `📄 includes/elements/column.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/elements/column.php
```
⬜ 514    		);
⬜ 515    
⬜ 516    		$this->add_group_control(
🟩 517    			Group_Control_Border::get_type(),
⬜ 518    			[
⬜ 519    				'name' => 'border',
⬜ 520    				'selector' => '{{WRAPPER}} > .elementor-element-populated',
```

<br/>

<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/elements/column.php
```
⬜ 551    		);
⬜ 552    
⬜ 553    		$this->add_group_control(
🟩 554    			Group_Control_Border::get_type(),
⬜ 555    			[
⬜ 556    				'name' => 'border_hover',
⬜ 557    				'selector' => '{{WRAPPER}}:hover > .elementor-element-populated',
```

<br/>

Update `📄 includes/elements/section.php`
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/elements/section.php
```
⬜ 821    		);
⬜ 822    
⬜ 823    		$this->add_group_control(
🟩 824    			Group_Control_Border::get_type(),
⬜ 825    			[
⬜ 826    				'name' => 'border',
⬜ 827    			]
```

<br/>


<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-2a4594">Group_Control_Base</span>[^](#2a4594) - "includes/controls/groups/base.php" L16
```php
abstract class Group_Control_Base implements Group_Control_Interface {
```

<span id="f-02796d">Group_Control_Css_Filter</span>[^](#02796d) - "includes/controls/groups/css-filter.php" L17
```php
class Group_Control_Css_Filter extends Group_Control_Base {
```

<span id="f-728fdb">Group_Control_Base</span>[^](#728fdb) - "includes/controls/groups/base.php" L16
```php
abstract class Group_Control_Base implements Group_Control_Interface {
```

<span id="f-36db2a">Group_Control_Typography</span>[^](#36db2a) - "includes/controls/groups/typography.php" L19
```php
class Group_Control_Typography extends Group_Control_Base {
```

<span id="f-8c8df1">Group_Control_Text_Shadow</span>[^](#8c8df1) - "includes/controls/groups/text-shadow.php" L17
```php
class Group_Control_Text_Shadow extends Group_Control_Base {
```

<span id="f-552bb2">Group_Control_Border</span>[^](#552bb2) - "includes/controls/groups/border.php" L16
```php
class Group_Control_Border extends Group_Control_Base {
```

<span id="f-7e697a">Group_Control_Background</span>[^](#7e697a) - "includes/controls/groups/background.php" L19
```php
class Group_Control_Background extends Group_Control_Base {
```

<span id="f-3a119f">fields</span>[^](#3a119f) - "includes/controls/groups/css-filter.php" L31
```php
	protected static $fields;
```

<span id="f-334392">get_type</span>[^](#334392) - "includes/controls/groups/css-filter.php" L44
```php
	public static function get_type() {
```

<span id="f-05f738">init_fields</span>[^](#05f738) - "includes/controls/groups/css-filter.php" L58
```php
	protected function init_fields() {
```

<span id="f-09bfa0">get_default_options</span>[^](#09bfa0) - "includes/controls/groups/css-filter.php" L162
```php
	protected function get_default_options() {
```

<span id="f-8c951b">get_type</span>[^](#8c951b) - "includes/controls/groups/css-filter.php" L44
```php
	public static function get_type() {
```

<span id="f-4ce369">init_fields</span>[^](#4ce369) - "includes/controls/groups/css-filter.php" L58
```php
	protected function init_fields() {
```

<span id="f-f8672a">get_default_options</span>[^](#f8672a) - "includes/controls/groups/css-filter.php" L162
```php
	protected function get_default_options() {
```
