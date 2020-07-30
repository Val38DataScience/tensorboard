/*
@license
Copyright 2016 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO: Link in Roboto?

const style = document.createElement('style');
style.textContent = `
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Roboto, sans-serif;
    color: var(--primary-text-color);

    /* Legacy mechanism to avoid issues with subpixel anti-aliasing on macOS.
     *
     * In the past [1], macOS subpixel AA caused excessive bolding for light-on-dark text; this rule
     * avoids that by requesting non-subpixel AA always, rather than the default behavior, which is
     * to use subpixel AA when available. The original issue was "fixed" by removing subpixel AA in
     * macOS 14 (Mojave), but for legacy reasons they preserved the bolding effect as an option.
     * Chrome then in turn updated its font rendering to apply that bolding effect [2], which means
     * that even though the \`-webkit-font-smoothing\` docs [3] suggest that setting \`antialiased\`
     * would have no effect for recent versions of macOS, it still is needed to avoid the bolding.
     *
     * [1]: http://www.lighterra.com/articles/macosxtextaabug/
     * [2]: https://bugs.chromium.org/p/chromium/issues/detail?id=858861
     * [3]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
     *
     */
    -webkit-font-smoothing: antialiased;
  }
`;
document.head.appendChild(style);

export const __null = null; // force TypeScript to treat this as a module
