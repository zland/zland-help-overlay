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
var ModalMixin = require('core/components/ModalMixin');
var LinkMixin = require('core/components/LinkMixin');
var NavigationMixin = require('react-router').Navigation;

// The target is to create a gaming experience influenced by people all over the world.
// You can help improving the app by doing the following things:<br/>
//                           <ul>
//                             <li>Tell us your opinion and ideas</li>
//                             <li>Report a bug</li>
//                             <li>Create images</li>
//                             <li>Provide CSS styles</li>
//                             <li>Submit your own code</li>
//                           </ul>



module.exports = React.createClass({

  mixins: [ModalMixin, NavigationMixin, LinkMixin, PureRenderMixin],

  close: function() {
    this.hide((function() {
      this.transitionTo('/');
    }).bind(this));
  },

  render: function() {
    var videoStyle = {
      "width": "100%",
      "height": "auto"
    };
    return (
      <div className="modal fade" ref="modal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.close} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Crosshair explained</h4>
                  </div>
                  <div className="modal-body">
                    <p>
                      <a className="btn btn-default" data-toggle="collapse" href="#contribute" aria-expanded="false" aria-controls="contribute">
                        About
                      </a>
                      <div className="collapse" id="contribute">
                        <div className="well">
                          Hi folks I'm Florian and this is my little project. There are plans to open source everything but I need your feedback.<br/>
                          More information at <a href="http://zland.io" target="_blank" onClick={this.linkClick}>zland.io</a>
                        </div>
                      </div>
                    </p>
                    <p>
                      <a className="btn btn-default" data-toggle="collapse" href="#crosshair" aria-expanded="false" aria-controls="crosshair">
                        Crosshair explained
                      </a>
                      <div className="collapse" id="crosshair">
                        <div className="well">
                          <video controls style={videoStyle}>
                            <source src="assets/zland-help-overlay/videos/crosshair.mp4"
                                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                          </video>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <a href="http://zland.io" target="_blank" onClick={this.linkClick}>zland.io</a>
                  </div>
              </div>
          </div>
      </div>
    );
  }

});
