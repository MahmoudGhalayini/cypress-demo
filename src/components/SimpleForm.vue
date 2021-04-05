<template>
	<b-container class="mt-3">
		<validation-observer v-slot="{ handleSubmit }">
			<validation-provider
				name="Username"
				:rules="validation.username"
				v-slot="validationContext"
			>
				<b-form-group label="Username">
					<b-form-input
						id="username"
						placeholder="username"
						v-model="username"
						:state="getValidationState(validationContext)"
					></b-form-input>
					<b-form-invalid-feedback id="username-feedback">
						{{ validationContext.errors[0] }}
					</b-form-invalid-feedback>
				</b-form-group>
			</validation-provider>
			<validation-provider
				name="Full Name"
				:rules="validation.fullName"
				v-slot="validationContext"
			>
				<b-form-group label="Full Name">
					<b-form-input
						id="full-name"
						placeholder="full-name"
						v-model="fullName"
						:state="getValidationState(validationContext)"
					></b-form-input>
					<b-form-invalid-feedback id="full-name-feedback">
						{{ validationContext.errors[0] }}
					</b-form-invalid-feedback>
				</b-form-group>
			</validation-provider>
			<b-button id="submit" variant="primary" @click="handleSubmit(formSubmit)"
				>Submit</b-button
			>
		</validation-observer>
	</b-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
	name: 'SimpleForm',
	components: {
		ValidationObserver,
		ValidationProvider,
	},
	data() {
		return {
			username: null,
			fullName: null,
			validation: {
				username: { required: true, alpha_dash: true, min: 1, max: 255 },
				fullName: { required: true, min: 1, max: 255 },
			},
		};
	},
	methods: {
		getValidationState({ dirty, validated, valid = null }) {
			return dirty || validated ? valid : null;
		},
		formSubmit() {
			alert('Done');
			window.location.reload();
		},
	},
};
</script>
