
const stylelint = require("stylelint");
var path = require("path");

const ruleName = "filenames/match-regex";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected ..."
});


module.exports = stylelint.createPlugin(
  ruleName,
  function (primaryOption, secondaryOptionObject) {
    return function (postcssRoot, postcssResult) {
		
		var dRegexp = /^[a-z_A-Z0-9]$/g,//default
        cRegexp = secondaryOptionObject ? new RegExp(secondaryOptionObject) : dRegexp;        
		
			var filename = postcssRoot.source.input.from,                
          extfile = path.extname(filename),
				  name = path.basename(filename),				
				  matchRegex = cRegexp.test(name);

				if (!matchRegex) {
					stylelint.utils.report({
						message: "Filename "+ name  + " does not match the regex expression.",
            ruleName: ruleName,
            result: postcssResult,
            line: 1,
            column: 1
					  });
				}      
    };
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;