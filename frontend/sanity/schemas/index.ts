import {type SchemaTypeDefinition} from 'sanity';

import project from './project-schema';
import page from './page-schema';
import author from './author-schema';
import post from './post-schema';
import category from './category-schema';
import blockContent from './blockContent';

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [project, page, post, author, category, blockContent],
};

// const schemas = [project, page, author];

// export default schemas;
