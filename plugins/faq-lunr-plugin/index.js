const fs = require('fs');
const path = require('path');

module.exports = function faqLunrPlugin(context, options) {
  return {
    name: 'faq-lunr-plugin',

    async loadContent() {
      const faqPath = path.resolve(__dirname, '../../static/faqData.json');
      const faqData = JSON.parse(fs.readFileSync(faqPath, 'utf-8'));

      return faqData.map((faq) => ({
        id: faq.question,
        content: faq.answer,
        question: faq.question,
        categories: faq.categories.join(', '),
        subjects: faq.subjects.join(', '),
      }));
    },

  };
};