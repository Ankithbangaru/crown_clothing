/**
 * Interface representing the context of a callback function within legacy Sass APIs.
 * 
 * @deprecated This interface is only applicable to legacy `render` and `renderSync` APIs.
 *             Consider using newer APIs like `compile`, `compileString`, `compileAsync`, and `compileStringAsync` instead.
 */
export interface LegacyPluginThis {
  /**
   * Partial representation of options passed to `render` or `renderSync`.
   */
  options: {
    /**
     * Reference to the same `LegacyPluginThis` instance.
     */
    context: LegacyPluginThis;

    /**
     * Value passed to `file` or `data` options.
     */
    file?: string;

    /**
     * Value passed to `includePaths` option.
     * Paths separated by `;` on Windows or `:` on other systems.
     */
    includePaths: string;

    /**
     * Number of decimal places for numeric precision.
     */
    precision: 10;

    /**
     * Output style of compiled CSS.
     */
    style: 1;

    /**
     * Represents whether `indentType` was set to `"tab"` or not.
     */
    indentType: 1 | 0;

    /**
     * Width of indentation.
     */
    indentWidth: number;

    /**
     * Linefeed style.
     */
    linefeed: '\r' | '\r\n' | '\n' | '\n\r';

    /**
     * Partially-constructed `LegacyResult` object.
     */
    result: {
      /**
       * Compilation stats.
       */
      stats: {
        /**
         * Start time of compilation.
         */
        start: number;

        /**
         * Entry file name or `"data"` if not provided.
         */
        entry: string;
      };
    };
  };
}
