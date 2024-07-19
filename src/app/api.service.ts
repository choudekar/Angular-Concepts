import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSuperBase } from './utils/initSuperBase';
import { Todo } from './Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // supaBase: SupabaseClient = createClient(initSuperBase.superBaseUrl, initSuperBase.superBaseKey);
  // private superbase: SupabaseClient;

  // async addTodo(todo: Todo) {
  //   const { data, error } = await this.supaBase
  //     .from('Todos')
  //     .insert(todo)
  //   return { data, error };

  // }
  // async fetchData() {
  //   const { data, error } = await this.supaBase.from('Todos').select('*');
  //   if (error) {
  //     console.error('Error fetching data:', error.message);
  //     return;
  //   }
  //   console.log('Fetched data: ' + data);
  // }
  // constructor() {
  //   console.log("entry api");

  //   this.superbase = createClient(initSuperBase.superBaseUrl, initSuperBase.superBaseKey);
  //   console.log("connected");

  // }

  // async addTodo(todo: any): Promise<any> {
  //   const { data, error } = await this.superbase.from('Todos').insert([todo]);
  //   if (error) {
  //     console.error('Error adding todo:', error.message);
  //     return null;
  //   }
  //   return data;
  // }

}
