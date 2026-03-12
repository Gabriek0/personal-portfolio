import { GrayMatterFile } from 'gray-matter';

type Post = GrayMatterFile<string>;

export type Posts = Array<Post>;
