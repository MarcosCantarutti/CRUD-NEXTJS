import { todoRepository } from '@ui/repository/todo';

interface TodoControllerGetParams {
  page: number;
}

async function get({ page }: TodoControllerGetParams) {
  return todoRepository.get({
    page: page || 1, // pagina ou pagina 1
    limit: 1
  });
}

function filterTodosByContent<Todo>(todos: Array<Todo & { content: string }>, search: string): Array<Todo> {
  const homeTodos = todos.filter((todo) => {
    const searchNormalized = search.toLowerCase();
    const contentNormalized = todo.content.toLowerCase();
    return contentNormalized.includes(searchNormalized);
  });

  return homeTodos;
}
export const todoController = {
  get,
  filterTodosByContent,
}
