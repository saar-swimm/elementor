const { expect } = require( '@playwright/test' );
const { EditorPage } = require( '../../../../../pages/editor-page' );
const Breakpoints = require( '../../../../../assets/breakpoints' );

module.exports = class {
	constructor( page ) {
		this.page = page;
	}

    async open() {
        await this.editor.getFrame().click( '.elementor-add-section-button' );
        await this.editor.getFrame().click( '.elementor-select-preset-list li:nth-child(2)' );
        await this.page.click( '#elementor-panel-footer-responsive' );
        await this.page.click( 'text=Advanced' );
        await this.page.click( 'text=Responsive' );
    }

    async setFirstColumn() {
        this.firstColumn = await this.editor.getFrame().locator( '[data-element_type="column"][data-col="50"]:nth-child(1)' ).first();
    }

    async toggle( device ) {
        await this.page.click( `.elementor-control.elementor-control-reverse_order_${ device } .elementor-control-content .elementor-control-field .elementor-control-input-wrapper .elementor-switch .elementor-switch-label` );
    }

    async init( isExperimentBreakpoints ) {
        this.editor = new EditorPage( this.page );

        await this.editor.init( {
            additional_custom_breakpoints: isExperimentBreakpoints,
        } );

        if ( isExperimentBreakpoints ) {
            const breakpoints = new Breakpoints( this.page, this.editor );
            await breakpoints.addAllBreakpoints();
        }

        await this.open();

        await this.setFirstColumn();
    }

    async testReverseColumnsOneActivated( testDevice, isExperimentBreakpoints = false ) {
        await this.init( isExperimentBreakpoints );

        await this.page.click( `#e-responsive-bar-switcher__option-${ testDevice }` );
        await expect( this.firstColumn ).toHaveCSS( 'order', '0' );

        await this.toggle( testDevice );

        await expect( this.firstColumn ).toHaveCSS( 'order', '10' );

        const breakpoints = isExperimentBreakpoints ? Breakpoints.getAll() : Breakpoints.getBasic(),
            filteredBreakpoints = breakpoints.filter( ( value ) => testDevice !== value );

        for ( const breakpoint of filteredBreakpoints ) {
            await this.page.click( `#e-responsive-bar-switcher__option-${ breakpoint }` );
            await expect( this.firstColumn ).toHaveCSS( 'order', '0' );
        }
    }

    async testReverseColumnsAllActivated( isExperimentBreakpoints = false ) {
        await this.init( isExperimentBreakpoints );

        const breakpoints = isExperimentBreakpoints ? Breakpoints.getAll() : Breakpoints.getBasic();

        for ( const breakpoint of breakpoints ) {
            await this.page.click( `#e-responsive-bar-switcher__option-${ breakpoint }` );
            if ( 'desktop' === breakpoint ) {
                await expect( this.firstColumn ).toHaveCSS( 'order', '0' );
                continue;
            }
            await this.toggle( breakpoint );
            await expect( this.firstColumn ).toHaveCSS( 'order', '10' );
        }
    }
};
