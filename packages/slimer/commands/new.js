const newProject = require('../lib/new-project');
const Switch = require('@tryghost/pretty-cli/types/switch');

// Internal ID in case we need one.
exports.id = 'new';

// The command to run and any params
exports.flags = 'new <name>';

// Aliases, other names for the command
exports.aliases = ['create', 'project'];

// Description for the top level command
exports.desc = 'Start a new project';

// Descriptions for the individual params
exports.paramsDesc = ['Name for the project folder'];

exports.setup = (sywac) => {
    sywac.enumeration('-t, --type <type>', {
        desc: 'The type of project to create',
        choices: ['module', 'app', 'pkg', 'mono']
    });

    sywac.custom(new Switch({
        flags: '--public',
        desc: 'Is the project public?'
    }));
};

// What to do when this command is executed
exports.run = newProject;
