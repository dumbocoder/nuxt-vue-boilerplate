/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Project name', // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Awesome Project',
    },
    author: {
      type: 'string',
      message: 'Author',
      default: 'project@dev.com',
      validate: function (answer) {
        if (/@/g.test(answer)) {
          return true;
        }
        return 'E-mail should contain the @ symbol';
      },
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!',
    },
  },

  /**
   * You can add a custom complete message
   */
  completeMessage:
    'start the following steps, wait: \n \n {{^ inPlace}} cd {{destDirName}} \n {{/ inPlace}} npm i  n npm run dev or npm start',
};
