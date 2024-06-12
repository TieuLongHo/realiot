
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const CI_SERVER_REVISION: string;
	export const FF_USE_WINDOWS_LEGACY_PROCESS_STRATEGY: string;
	export const GITLAB_USER_LOGIN: string;
	export const CI_COMMIT_SHORT_SHA: string;
	export const FF_SCRIPT_SECTIONS: string;
	export const CI_SERVER_VERSION_PATCH: string;
	export const FF_POSIXLY_CORRECT_ESCAPES: string;
	export const CI_DEPENDENCY_PROXY_PASSWORD: string;
	export const CI_DEPENDENCY_PROXY_SERVER: string;
	export const FF_USE_DUMB_INIT_WITH_KUBERNETES_EXECUTOR: string;
	export const npm_config_user_agent: string;
	export const CI_PROJECT_NAME: string;
	export const CI_SERVER_PROTOCOL: string;
	export const FF_USE_LEGACY_KUBERNETES_EXECUTION_STRATEGY: string;
	export const CI_RUNNER_REVISION: string;
	export const FF_LOG_IMAGES_CONFIGURED_FOR_JOB: string;
	export const CI: string;
	export const NODE_VERSION: string;
	export const HOSTNAME: string;
	export const YARN_VERSION: string;
	export const CI_COMMIT_DESCRIPTION: string;
	export const CI_JOB_STAGE: string;
	export const CI_PROJECT_DESCRIPTION: string;
	export const npm_node_execpath: string;
	export const CI_SERVER_VERSION: string;
	export const SHLVL: string;
	export const CI_DEPENDENCY_PROXY_USER: string;
	export const npm_config_noproxy: string;
	export const FF_DISABLE_POWERSHELL_STDIN: string;
	export const HOME: string;
	export const CI_PROJECT_ROOT_NAMESPACE: string;
	export const FF_CLEAN_UP_FAILED_CACHE_EXTRACT: string;
	export const OLDPWD: string;
	export const FF_NETWORK_PER_BUILD: string;
	export const CI_COMMIT_REF_NAME: string;
	export const CI_SERVER_HOST: string;
	export const CI_JOB_ID: string;
	export const npm_package_json: string;
	export const CI_RUNNER_VERSION: string;
	export const CI_PIPELINE_SOURCE: string;
	export const FF_RESOLVE_FULL_TLS_CHAIN: string;
	export const FF_SKIP_NOOP_BUILD_STAGES: string;
	export const FF_USE_WINDOWS_JOB_OBJECT: string;
	export const CI_DEFAULT_BRANCH: string;
	export const CI_BUILDS_DIR: string;
	export const CI_SERVER_VERSION_MAJOR: string;
	export const FF_USE_FASTZIP: string;
	export const CI_REGISTRY_PASSWORD: string;
	export const CI_COMMIT_REF_PROTECTED: string;
	export const CI_SERVER_URL: string;
	export const CI_TEMPLATE_REGISTRY_HOST: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const GITLAB_FEATURES: string;
	export const CI_PROJECT_ID: string;
	export const npm_config_engine_strict: string;
	export const CI_COMMIT_SHA: string;
	export const GITLAB_CI: string;
	export const COLOR: string;
	export const FF_RETRIEVE_POD_WARNING_EVENTS: string;
	export const CI_CONCURRENT_ID: string;
	export const CI_REGISTRY_USER: string;
	export const FF_USE_DOCKER_AUTOSCALER_DIAL_STDIO: string;
	export const CI_SERVER_PORT: string;
	export const FF_DISABLE_UMASK_FOR_DOCKER_EXECUTOR: string;
	export const CI_PROJECT_PATH: string;
	export const CI_PROJECT_DIR: string;
	export const CI_PROJECT_NAMESPACE: string;
	export const FF_ENABLE_JOB_CLEANUP: string;
	export const CI_COMMIT_TIMESTAMP: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const CI_SERVER_NAME: string;
	export const FF_USE_DIRECT_DOWNLOAD: string;
	export const CI_JOB_TOKEN: string;
	export const FF_USE_DYNAMIC_TRACE_FORCE_SEND_INTERVAL: string;
	export const CI_NODE_TOTAL: string;
	export const CI_PROJECT_NAMESPACE_ID: string;
	export const CI_PIPELINE_CREATED_AT: string;
	export const npm_config_cache: string;
	export const CI_JOB_NAME_SLUG: string;
	export const RUNNER_TEMP_PROJECT_DIR: string;
	export const CI_CONCURRENT_PROJECT_ID: string;
	export const CI_PIPELINE_URL: string;
	export const FF_KUBERNETES_HONOR_ENTRYPOINT: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const CI_RUNNER_DESCRIPTION: string;
	export const CI_SERVER_VERSION_MINOR: string;
	export const CI_JOB_STARTED_AT: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const GITLAB_USER_EMAIL: string;
	export const FF_USE_NEW_BASH_EVAL_STRATEGY: string;
	export const CI_PROJECT_VISIBILITY: string;
	export const CI_COMMIT_TITLE: string;
	export const CI_PROJECT_TITLE: string;
	export const CI_SERVER: string;
	export const FF_USE_GIT_BUNDLE_URIS: string;
	export const FF_CMD_DISABLE_DELAYED_ERROR_LEVEL_EXPANSION: string;
	export const FF_TIMESTAMPS: string;
	export const CI_PAGES_URL: string;
	export const CI_PROJECT_REPOSITORY_LANGUAGES: string;
	export const FF_SET_PERMISSIONS_BEFORE_CLEANUP: string;
	export const FF_PRINT_POD_EVENTS: string;
	export const CI_SERVER_FQDN: string;
	export const CI_COMMIT_AUTHOR: string;
	export const npm_lifecycle_script: string;
	export const CI_RUNNER_SHORT_TOKEN: string;
	export const CI_PAGES_DOMAIN: string;
	export const CI_PIPELINE_NAME: string;
	export const CI_JOB_TIMEOUT: string;
	export const CI_REPOSITORY_URL: string;
	export const GITLAB_ENV: string;
	export const CI_COMMIT_BRANCH: string;
	export const CI_PROJECT_CLASSIFICATION_LABEL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const FF_USE_POWERSHELL_PATH_RESOLVER: string;
	export const CI_API_GRAPHQL_URL: string;
	export const CI_RUNNER_ID: string;
	export const CI_API_V4_URL: string;
	export const CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX: string;
	export const CI_JOB_JWT_V1: string;
	export const GITLAB_USER_NAME: string;
	export const CI_JOB_JWT_V2: string;
	export const CI_PIPELINE_IID: string;
	export const CI_RUNNER_EXECUTABLE_ARCH: string;
	export const FF_USE_POD_ACTIVE_DEADLINE_SECONDS: string;
	export const FF_USE_ADVANCED_POD_SPEC_CONFIGURATION: string;
	export const CI_SERVER_SHELL_SSH_HOST: string;
	export const CI_JOB_URL: string;
	export const FF_USE_INIT_WITH_DOCKER_EXECUTOR: string;
	export const FF_TEST_FEATURE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const CI_COMMIT_REF_SLUG: string;
	export const PWD: string;
	export const CI_DISPOSABLE_ENVIRONMENT: string;
	export const CI_JOB_JWT: string;
	export const npm_execpath: string;
	export const CI_RUNNER_TAGS: string;
	export const FF_USE_NEW_SHELL_ESCAPE: string;
	export const FF_SECRET_RESOLVING_FAILS_IF_MISSING: string;
	export const npm_config_global_prefix: string;
	export const CI_PIPELINE_ID: string;
	export const CI_PROJECT_PATH_SLUG: string;
	export const CI_COMMIT_BEFORE_SHA: string;
	export const CI_CONFIG_PATH: string;
	export const CI_PROJECT_URL: string;
	export const npm_command: string;
	export const CI_COMMIT_MESSAGE: string;
	export const GITLAB_USER_ID: string;
	export const CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX: string;
	export const FF_ENABLE_BASH_EXIT_CODE_CHECK: string;
	export const CI_JOB_NAME: string;
	export const CI_JOB_STATUS: string;
	export const CI_SERVER_SHELL_SSH_PORT: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		CI_SERVER_REVISION: string;
		FF_USE_WINDOWS_LEGACY_PROCESS_STRATEGY: string;
		GITLAB_USER_LOGIN: string;
		CI_COMMIT_SHORT_SHA: string;
		FF_SCRIPT_SECTIONS: string;
		CI_SERVER_VERSION_PATCH: string;
		FF_POSIXLY_CORRECT_ESCAPES: string;
		CI_DEPENDENCY_PROXY_PASSWORD: string;
		CI_DEPENDENCY_PROXY_SERVER: string;
		FF_USE_DUMB_INIT_WITH_KUBERNETES_EXECUTOR: string;
		npm_config_user_agent: string;
		CI_PROJECT_NAME: string;
		CI_SERVER_PROTOCOL: string;
		FF_USE_LEGACY_KUBERNETES_EXECUTION_STRATEGY: string;
		CI_RUNNER_REVISION: string;
		FF_LOG_IMAGES_CONFIGURED_FOR_JOB: string;
		CI: string;
		NODE_VERSION: string;
		HOSTNAME: string;
		YARN_VERSION: string;
		CI_COMMIT_DESCRIPTION: string;
		CI_JOB_STAGE: string;
		CI_PROJECT_DESCRIPTION: string;
		npm_node_execpath: string;
		CI_SERVER_VERSION: string;
		SHLVL: string;
		CI_DEPENDENCY_PROXY_USER: string;
		npm_config_noproxy: string;
		FF_DISABLE_POWERSHELL_STDIN: string;
		HOME: string;
		CI_PROJECT_ROOT_NAMESPACE: string;
		FF_CLEAN_UP_FAILED_CACHE_EXTRACT: string;
		OLDPWD: string;
		FF_NETWORK_PER_BUILD: string;
		CI_COMMIT_REF_NAME: string;
		CI_SERVER_HOST: string;
		CI_JOB_ID: string;
		npm_package_json: string;
		CI_RUNNER_VERSION: string;
		CI_PIPELINE_SOURCE: string;
		FF_RESOLVE_FULL_TLS_CHAIN: string;
		FF_SKIP_NOOP_BUILD_STAGES: string;
		FF_USE_WINDOWS_JOB_OBJECT: string;
		CI_DEFAULT_BRANCH: string;
		CI_BUILDS_DIR: string;
		CI_SERVER_VERSION_MAJOR: string;
		FF_USE_FASTZIP: string;
		CI_REGISTRY_PASSWORD: string;
		CI_COMMIT_REF_PROTECTED: string;
		CI_SERVER_URL: string;
		CI_TEMPLATE_REGISTRY_HOST: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		GITLAB_FEATURES: string;
		CI_PROJECT_ID: string;
		npm_config_engine_strict: string;
		CI_COMMIT_SHA: string;
		GITLAB_CI: string;
		COLOR: string;
		FF_RETRIEVE_POD_WARNING_EVENTS: string;
		CI_CONCURRENT_ID: string;
		CI_REGISTRY_USER: string;
		FF_USE_DOCKER_AUTOSCALER_DIAL_STDIO: string;
		CI_SERVER_PORT: string;
		FF_DISABLE_UMASK_FOR_DOCKER_EXECUTOR: string;
		CI_PROJECT_PATH: string;
		CI_PROJECT_DIR: string;
		CI_PROJECT_NAMESPACE: string;
		FF_ENABLE_JOB_CLEANUP: string;
		CI_COMMIT_TIMESTAMP: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		CI_SERVER_NAME: string;
		FF_USE_DIRECT_DOWNLOAD: string;
		CI_JOB_TOKEN: string;
		FF_USE_DYNAMIC_TRACE_FORCE_SEND_INTERVAL: string;
		CI_NODE_TOTAL: string;
		CI_PROJECT_NAMESPACE_ID: string;
		CI_PIPELINE_CREATED_AT: string;
		npm_config_cache: string;
		CI_JOB_NAME_SLUG: string;
		RUNNER_TEMP_PROJECT_DIR: string;
		CI_CONCURRENT_PROJECT_ID: string;
		CI_PIPELINE_URL: string;
		FF_KUBERNETES_HONOR_ENTRYPOINT: string;
		npm_config_node_gyp: string;
		PATH: string;
		CI_RUNNER_DESCRIPTION: string;
		CI_SERVER_VERSION_MINOR: string;
		CI_JOB_STARTED_AT: string;
		NODE: string;
		npm_package_name: string;
		GITLAB_USER_EMAIL: string;
		FF_USE_NEW_BASH_EVAL_STRATEGY: string;
		CI_PROJECT_VISIBILITY: string;
		CI_COMMIT_TITLE: string;
		CI_PROJECT_TITLE: string;
		CI_SERVER: string;
		FF_USE_GIT_BUNDLE_URIS: string;
		FF_CMD_DISABLE_DELAYED_ERROR_LEVEL_EXPANSION: string;
		FF_TIMESTAMPS: string;
		CI_PAGES_URL: string;
		CI_PROJECT_REPOSITORY_LANGUAGES: string;
		FF_SET_PERMISSIONS_BEFORE_CLEANUP: string;
		FF_PRINT_POD_EVENTS: string;
		CI_SERVER_FQDN: string;
		CI_COMMIT_AUTHOR: string;
		npm_lifecycle_script: string;
		CI_RUNNER_SHORT_TOKEN: string;
		CI_PAGES_DOMAIN: string;
		CI_PIPELINE_NAME: string;
		CI_JOB_TIMEOUT: string;
		CI_REPOSITORY_URL: string;
		GITLAB_ENV: string;
		CI_COMMIT_BRANCH: string;
		CI_PROJECT_CLASSIFICATION_LABEL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		FF_USE_POWERSHELL_PATH_RESOLVER: string;
		CI_API_GRAPHQL_URL: string;
		CI_RUNNER_ID: string;
		CI_API_V4_URL: string;
		CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX: string;
		CI_JOB_JWT_V1: string;
		GITLAB_USER_NAME: string;
		CI_JOB_JWT_V2: string;
		CI_PIPELINE_IID: string;
		CI_RUNNER_EXECUTABLE_ARCH: string;
		FF_USE_POD_ACTIVE_DEADLINE_SECONDS: string;
		FF_USE_ADVANCED_POD_SPEC_CONFIGURATION: string;
		CI_SERVER_SHELL_SSH_HOST: string;
		CI_JOB_URL: string;
		FF_USE_INIT_WITH_DOCKER_EXECUTOR: string;
		FF_TEST_FEATURE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		CI_COMMIT_REF_SLUG: string;
		PWD: string;
		CI_DISPOSABLE_ENVIRONMENT: string;
		CI_JOB_JWT: string;
		npm_execpath: string;
		CI_RUNNER_TAGS: string;
		FF_USE_NEW_SHELL_ESCAPE: string;
		FF_SECRET_RESOLVING_FAILS_IF_MISSING: string;
		npm_config_global_prefix: string;
		CI_PIPELINE_ID: string;
		CI_PROJECT_PATH_SLUG: string;
		CI_COMMIT_BEFORE_SHA: string;
		CI_CONFIG_PATH: string;
		CI_PROJECT_URL: string;
		npm_command: string;
		CI_COMMIT_MESSAGE: string;
		GITLAB_USER_ID: string;
		CI_DEPENDENCY_PROXY_GROUP_IMAGE_PREFIX: string;
		FF_ENABLE_BASH_EXIT_CODE_CHECK: string;
		CI_JOB_NAME: string;
		CI_JOB_STATUS: string;
		CI_SERVER_SHELL_SSH_PORT: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
