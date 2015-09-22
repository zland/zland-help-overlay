/*!
 * Copyright 2015 Florian Biewald
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('helpOverlay/sass/style');

var React = require('react');
var PureRenderMixin = React.addons.PureRenderMixin;
var NavigationMixin = require('react-router').Navigation;

module.exports = React.createClass({
  mixins: [NavigationMixin, PureRenderMixin],

  navigateToHelpOverlay: function() {
    this.transitionTo('/help-overlay');
  },

  render: function() {
    return (
      <button className="help-overlay-button" onClick={this.navigateToHelpOverlay}>
        <i className="fa fa-question-circle fa-2x"></i>
      </button>
    )
  }
});
