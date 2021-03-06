import fs from "fs";
import path from "path";

import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map(filename => {
    const slug = filename.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, filename),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    return { data, content, slug };
  });
}
/*
export const blogPosts: blog[] = [
  {
    title: "My First Post",
    slug: "first",
    date: new Date().toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eget est lorem ipsum dolor sit. Massa enim nec dui nunc mattis enim ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mi in nulla posuere sollicitudin. In vitae turpis massa sed elementum. Et leo duis ut diam quam nulla porttitor massa. Feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet. Bibendum enim facilisis gravida neque. Phasellus faucibus scelerisque eleifend donec pretium. Ultrices gravida dictum fusce ut placerat orci nulla. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Tristique senectus et netus et malesuada fames. Sed id semper risus in hendrerit gravida."
  },

  {
    title: "My Second Post",
    slug: "second",
    date: new Date().toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eget est lorem ipsum dolor sit. Massa enim nec dui nunc mattis enim ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mi in nulla posuere sollicitudin. In vitae turpis massa sed elementum. Et leo duis ut diam quam nulla porttitor massa. Feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet. Bibendum enim facilisis gravida neque. Phasellus faucibus scelerisque eleifend donec pretium. Ultrices gravida dictum fusce ut placerat orci nulla. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Tristique senectus et netus et malesuada fames. Sed id semper risus in hendrerit gravida."
  },

  {
    title: "My Third Post",
    slug: "third",
    date: new Date().toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eget est lorem ipsum dolor sit. Massa enim nec dui nunc mattis enim ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mi in nulla posuere sollicitudin. In vitae turpis massa sed elementum. Et leo duis ut diam quam nulla porttitor massa. Feugiat in ante metus dictum at. Amet mattis vulputate enim nulla aliquet. Bibendum enim facilisis gravida neque. Phasellus faucibus scelerisque eleifend donec pretium. Ultrices gravida dictum fusce ut placerat orci nulla. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Tristique senectus et netus et malesuada fames. Sed id semper risus in hendrerit gravida."
  }
];
*/
