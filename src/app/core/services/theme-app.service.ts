import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
/**
 * Orlado Garcia
 * Bmasc Dev Team
 * This services is in charge of setting, storing and changeing the color scheme theme of the Web App
 * @ export
 * @ class ThemeAppService
 *
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeAppService {

  private renderer: Renderer2;
  private colorSchema: string;
  private colorSchemaPrefix: 'color-scheme-';

  constructor(rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
  }

  /**
   * _detectPrefersColorSchema
   * this method will set the theme depending of the prefers-color-scheme that is store in the browser´s
   * configuration or if is not supported it will set Dark theme as default :D
   */
  private _detectPrefersColorSchema() {
    // Detect if prefers-color-scheme is supported in the browser
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all' ) {
      console.log('theme app loaded');
      this.colorSchema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      console.log(this.colorSchema);
    } else {
      // if the brownser doesn´t support prefers-color-scheme, then set is as defult to dark theme :p
      this.colorSchema = 'dark';
    }
  }

  /**
   * _setColorSchema
   * This method is in charge of storing the color scheme in the localStorage of the browser
   * @param scheme: @string
   */
  private _setColorSchema(scheme: string) {
    this.colorSchema = scheme;
    // Save prefers-color-scheme to localStorage
    // TODO: CHANGE
    // This will later change to a library with better features}
    localStorage.setItem('prefers-color', scheme);
  }
  /**
   * _getColorScheme
   * This method will check if there is already a prefers-color sheme save it in the localstorage or not
   */
  private _getColorScheme() {
    //  Check if any prefers-color-scheme is stored in localStorage
    if ( localStorage.getItem('prefers-color') ) {
      // Save it :D
      this.colorSchema = localStorage.getItem('prefers-color');
    } else {
      // Detect if there is support or if you set the default theme
      this._detectPrefersColorSchema();
    }
  }

  /**
   * This metod will init the scheme proceses
   */
  public load() {
    console.log('theme app loaded');
    this._getColorScheme();
    this.renderer.addClass(document.body,  `color-scheme-${this.colorSchema}`);
  }
  /**
   * This method will update the new color scheme that needs to be change
   * @param scheme: @string
   */
  public update(scheme: string) {
    this._setColorSchema(scheme);
    const oldColorScheme = this.colorSchema === 'dark' ? 'light' : 'dark';
    // Remove the old color-schema css class
    this.renderer.removeClass(document.body, 'color-scheme-' + oldColorScheme);
    // Add the new current color-scheme css class
    this.renderer.addClass(document.body, 'color-scheme-' + scheme);
  }
  /**
   * This method will return the current color scheme
   */
  public currentActive() {
    return this.colorSchema;
  }
}
