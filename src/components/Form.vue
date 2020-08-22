<template>

	<form @submit.prevent="postNewTodo" class="text-center">
		<h2 v-if="editing" class="text-center m-5">Edit {{todo.title}}</h2>
		<h2 v-else class="text-center m-5">Add new Todo</h2>


		<div class="form-group">
			<input type="text" name="title" v-model="todo.title"  class="form-control" placeholder="Title">

		</div>


		<div class="form-group">
			<textarea class="form-control" v-model="todo.body" placeholder="Content"></textarea>
		</div>

		<div v-if="editing" class="d-flex justify-content-between">

			<input @click="saveEditing"  type="button" value="Save" class="btn btn-warning">
			<input @click="cancelEditing" type="button" value="Cancel" class="btn btn-danger">

		</div>

		<div v-else>

			<input type="submit" value="Add" class="btn btn-primary">
		</div>

	</form>

</template>

<script>

	import { mapState, mapMutations, mapActions } from 'vuex';

	export default {
		name: 'Form',
		data() {
			return {
//				title: '',
//				body: ''
			}
		},
		methods: {
			saveEditing() {
				this.$store.commit('saveEditingTodo');	
				this.$store.commit('getAllTodos');
				this.cancelEditing();
			},
			...mapMutations(['postNewTodo', 'cancelEditing'])
		},
		computed: mapState(['editing', 'editingTodo', 'todo'])
			
	}
</script>
