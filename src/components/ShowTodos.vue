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
						<button class="btn btn-warning">Edit</button>
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
	export default {
		name: 'ShowTodos',
		methods: {

			deleteTodo(todoId){
				this.$store.commit('deleteTodo', todoId);
			}
	
		},
		created() { this.$store.commit('getAllTodos') }
	}
</script>
