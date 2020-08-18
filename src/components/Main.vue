<template>
	<div class="container mt-6">
		<div class="row">
			<div class="col-md-4">
				<Form></Form>
			</div>

			<div class="col-md-8">
				<ShowTodos></ShowTodos>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from './Form.vue';
	import ShowTodos from './ShowTodos.vue';

	export default {
		name: 'Main',
		components: { Form, ShowTodos }
	}
		
</script>
