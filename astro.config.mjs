import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Neu bạn muốn deploy vào một folder con, hãy đổi base. 
  // Ở đây chúng ta dùng root nên để mặc định.
  output: 'static',
});
