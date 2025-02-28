---
id: labs_f41605
name: 05 -- How to Add a Control Multiple
file_version: 1.0.2
app_version: 0.6.9-2
file_blobs:
  includes/controls/box-shadow.php: e55cf9af34db5cc3e73dc295cd9f35b437da6fa7
---
# 05 -- How to Add a Control Multiple

In this document, we will learn how to add a new Control Multiple to the system.

A Control Multiple is 🙋‍


When we add a new Control Multiple, we create a class that inherits from `Control_Base_Multiple`[<sup id="d95a7b">↓</sup>](#f-d95a7b).

Some examples of `Control_Base_Multiple`[<sup id="d95a7b">↓</sup>](#f-d95a7b)s are `Control_Media`[<sup id="662afc">↓</sup>](#f-662afc), `Control_Dimensions`[<sup id="ebbb31">↓</sup>](#f-ebbb31), `Control_Slider`[<sup id="2d70ee">↓</sup>](#f-2d70ee), and `Control_Box_Shadow`[<sup id="20ed57">↓</sup>](#f-20ed57).
Note: some of these examples inherit indirectly from `Control_Base_Multiple`[<sup id="d95a7b">↓</sup>](#f-d95a7b).

## TL;DR - How to Add a `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac)

1. Create a new class inheriting from `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac)&nbsp;
   - Place the file under `📄 includes/controls`,
     e.g. `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe) is defined in `📄 includes/controls/box-shadow.php`.
2. Implement `content_template`[<sup id="4d4057">↓</sup>](#f-4d4057), `get_type`[<sup id="721ebb">↓</sup>](#f-721ebb), and `get_default_value`[<sup id="19f8d6">↓</sup>](#f-19f8d6).
4. **Profit** 💰

## The Full Story
We'll follow the implementation of `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe) for this example.

A `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe) is 🙋


## Steps to Adding a new `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac)
### 1\. Inherit from `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac).
All `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac)s are defined in files under `📄 includes/controls`.

<br/>

We first need to define our class in the relevant file, and inherit from `Control_Base_Multiple`[<sup id="ec8cac">↓</sup>](#f-ec8cac):
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/box-shadow.php
```php
⬜ 14      *
⬜ 15      * @since 1.0.0
⬜ 16      */
🟩 17     class Control_Box_Shadow extends Control_Base_Multiple {
⬜ 18     
⬜ 19     	/**
⬜ 20     	 * Get box shadow control type.
```

<br/>


> **Note**: the class name should start with "Control_".



### 2\. Implement `content_template`[<sup id="4d4057">↓</sup>](#f-4d4057), `get_type`[<sup id="721ebb">↓</sup>](#f-721ebb), and `get_default_value`[<sup id="19f8d6">↓</sup>](#f-19f8d6)
The goal of `content_template`[<sup id="a38d20">↓</sup>](#f-a38d20) is to 🙋.

<br/>

In this example, `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/box-shadow.php
```php
⬜ 97     	 * @since 1.0.0
⬜ 98     	 * @access public
⬜ 99     	 */
🟩 100    	public function content_template() {
⬜ 101    		?>
⬜ 102    		<div class="elementor-shadow-box">
⬜ 103    			<div class="elementor-control-field elementor-color-picker-wrapper">
```

<br/>

The goal of `get_type`[<sup id="a83dc4">↓</sup>](#f-a83dc4) is to 🙋.

<br/>

In this example, `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/box-shadow.php
```php
⬜ 26     	 *
⬜ 27     	 * @return string Control type.
⬜ 28     	 */
🟩 29     	public function get_type() {
⬜ 30     		return 'box_shadow';
⬜ 31     	}
⬜ 32     
```

<br/>

The goal of `get_default_value`[<sup id="24762a">↓</sup>](#f-24762a) is to 🙋.

<br/>

In this example, `Control_Box_Shadow`[<sup id="b2bfbe">↓</sup>](#f-b2bfbe), we 🙋
<!-- NOTE-swimm-snippet: the lines below links your snippet to Swimm -->
### 📄 includes/controls/box-shadow.php
```php
⬜ 41     	 *
⬜ 42     	 * @return array Control default value.
⬜ 43     	 */
🟩 44     	public function get_default_value() {
⬜ 45     		return [
⬜ 46     			'horizontal' => 0,
⬜ 47     			'vertical' => 0,
```

<br/>




<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->

### Swimm Note

<span id="f-ec8cac">Control_Base_Multiple</span>[^](#ec8cac) - "includes/controls/base-multiple.php" L18
```php
abstract class Control_Base_Multiple extends Base_Data_Control {
```

<span id="f-b2bfbe">Control_Box_Shadow</span>[^](#b2bfbe) - "includes/controls/box-shadow.php" L17
```php
class Control_Box_Shadow extends Control_Base_Multiple {
```

<span id="f-d95a7b">Control_Base_Multiple</span>[^](#d95a7b) - "includes/controls/base-multiple.php" L18
```php
abstract class Control_Base_Multiple extends Base_Data_Control {
```

<span id="f-662afc">Control_Media</span>[^](#662afc) - "includes/controls/media.php" L19
```php
class Control_Media extends Control_Base_Multiple {
```

<span id="f-ebbb31">Control_Dimensions</span>[^](#ebbb31) - "includes/controls/dimensions.php" L16
```php
class Control_Dimensions extends Control_Base_Units {
```

<span id="f-2d70ee">Control_Slider</span>[^](#2d70ee) - "includes/controls/slider.php" L20
```php
class Control_Slider extends Control_Base_Units {
```

<span id="f-20ed57">Control_Box_Shadow</span>[^](#20ed57) - "includes/controls/box-shadow.php" L17
```php
class Control_Box_Shadow extends Control_Base_Multiple {
```

<span id="f-4d4057">content_template</span>[^](#4d4057) - "includes/controls/box-shadow.php" L100
```php
	public function content_template() {
```

<span id="f-721ebb">get_type</span>[^](#721ebb) - "includes/controls/box-shadow.php" L29
```php
	public function get_type() {
```

<span id="f-19f8d6">get_default_value</span>[^](#19f8d6) - "includes/controls/box-shadow.php" L44
```php
	public function get_default_value() {
```

<span id="f-a38d20">content_template</span>[^](#a38d20) - "includes/controls/box-shadow.php" L100
```php
	public function content_template() {
```

<span id="f-a83dc4">get_type</span>[^](#a83dc4) - "includes/controls/box-shadow.php" L29
```php
	public function get_type() {
```

<span id="f-24762a">get_default_value</span>[^](#24762a) - "includes/controls/box-shadow.php" L44
```php
	public function get_default_value() {
```
