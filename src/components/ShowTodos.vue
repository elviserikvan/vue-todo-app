<template>	
	<div>
		<table class="table">
			<thead>
				<th>Title</th>
				<th>Content</th>
			</thead>
			<tbody>
				<tr v-for="(todo, index) in this.$store.state.todos">
					<td>{{todo.title}}</td>
					<td>{{todo.body}}</td>
					<td>
						<button @click="startEditingTodo(todo._id)" class="btn btn-warning">Edit</button>
					</td>
					<td>
						<button @click="deleteTodo(todo._id)" class="btn btn-danger">Delete</button>
					</td>

				</tr>

			</tbody>

		</table>
	</div>
</template>

<script>

	import { mapState, mapMutations } from 'vuex';

	export default {
		name: 'ShowTodos',
		methods: {

			deleteTodo(todoId){

				if (this.editing && this.todo._id == todoId) {
					this.$store.commit('cancelEditing');
				}				

				this.$store.commit('deleteTodo', todoId);
			},
			...mapMutations(['startEditingTodo']),
			async updateTodo(id) {
			
				// Get todo info to be updated
				let url = 	

				console.log(this.editing);
			}
	
		},
		computed: mapState(['editing', 'todo']),
		created() { this.$store.commit('getAllTodos') }
	}
</script>
