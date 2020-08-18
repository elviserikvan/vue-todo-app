<template>

	<form @submit.prevent="postTodo" class="text-center">
		<h2 class="text-center m-5">Add new Todo</h2>

		<div class="form-group">
			<input type="text" name="title" v-model="title"  class="form-control" placeholder="Title">

		</div>
		<div class="form-group">
			<textarea class="form-control" v-model="body" placeholder="Content"></textarea>
		</div>

		<input type="submit" value="Save" class="btn btn-primary">
	</form>

</template>

<script>
	export default {
		name: 'Form',
		data() {
			return {
				title: '',
				body: ''
			}
		},
		methods: {
			postTodo() {
				let todo_data = {
					title: this.title,
					body: this.body
				}

				this.$store.commit('postNewTodo', todo_data);


				// Clean Form Fields
				this.title = '';
				this.body = '';
			}
		}
	}
</script>
