# typescript-todo

Creating the classic To-Do app with TypeScript

## ToDo planning

<!-- can use ~~ on each end to strike entry as completed -->

### Need:

- Functionality
  - Log-in/Register
  - Individual To-Do lists
  - Create To-Do
  - Read To-Do
  - Update To-Do
  - Complete To-Do
  - Delete To-Do
- Views
  - Log-In page
  - List of Lists
  - To-Do List
  - To-Do Enter/Update
- Data [supabase]
  - User
    - id [uuid]
    - name [string]
  - users_todos
    - user_id [uuid](linked to user.id)
    - id [uuid]
    - todo_id [array[uuid]]
  - List of To-Dos
    - id [uuid]
    - task [string]
    - completed [boolean]

https://miro.com/app/board/uXjVPHozLcY=/#tpicker-content
