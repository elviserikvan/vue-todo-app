<template>	
	<div>
		<table class="table">
			<thead>
				<th>Title</th>
				<th>Content</th>
			</thead>
			<tbody>
				<tr>
					<td>Simple title</td>
					<td>Simple Body</td>
					<td>
						<button class="btn btn-warning">Edit</button>
					</td>
					<td>
						<button class="btn btn-danger">Delete</button>
					</td>

				</tr>
				<tr v-for="(todo, index) in this.$store.state.todos">
					<td>{{todo.title}}</td>
					<td>{{todo.body}}</td>
					<td>
						<button class="btn btn-warning">Edit</button>
					</td>
					<td>
						<button class="btn btn-danger">Delete</button>
					</td>

				</tr>

			</tbody>

		</table>
	</div>
</template>

<script>
	export default {
		name: 'ShowTodos',
		created() { this.$store.commit('getAllTodos') }
	}
</script>
