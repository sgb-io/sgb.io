'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _content = require('./content');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const fs = require('fs')
var output = '';
var template = _fs2.default.readFileSync(__dirname + '/template.md').toString();
var PROFILE_TEXT = '%PROFILE_TEXT%';
var SKILLS_LIST = '%SKILLS_LIST%';
var EXPERIENCE_LIST = '%EXPERIENCE_LIST%';

output = template.replace(PROFILE_TEXT, _content.about.intros.join('\n\n'));

var skillsOutput = _content.skills.technical.concat(_content.skills.supplementary).join('\n- ');
output = output.replace(SKILLS_LIST, '- ' + skillsOutput);

var experienceOutput = _content.skills.commercial.map(function (item) {
    return item.description + ' ' + item.companyName + ' - ' + item.dateRange;
});
output = output.replace(EXPERIENCE_LIST, '- ' + experienceOutput.join('\n- '));

// TODO make it write to cv.md
console.log(output);
