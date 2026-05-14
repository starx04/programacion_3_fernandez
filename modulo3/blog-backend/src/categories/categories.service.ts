import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private categories: any[] = [];

  create(body: any) {
    const newCategory = { id: Date.now().toString(), ...body };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    return this.categories.find(category => category.id === id);
  }

  update(id: string, body: any) {
    const category = this.categories.find(c => c.id === id);
    if (category) {
      Object.assign(category, body);
      return category;
    }
    return null;
  }

  remove(id: string) {
    const index = this.categories.findIndex(c => c.id === id);
    if (index > -1) {
      return this.categories.splice(index, 1);
    }
    return null;
  }
}