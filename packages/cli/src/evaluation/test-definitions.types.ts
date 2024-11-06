import type { AuthenticatedRequest, ListQuery } from '@/requests';

// ----------------------------------
//             /test-definitions
// ----------------------------------

export declare namespace TestDefinitionsRequest {
	namespace RouteParams {
		type TestId = {
			id: string;
		};
	}

	type GetOne = AuthenticatedRequest<RouteParams.TestId>;

	type GetMany = AuthenticatedRequest<{}, {}, {}, ListQuery.Params & { includeScopes?: string }> & {
		listQueryOptions: ListQuery.Options;
	};

	type Create = AuthenticatedRequest<{}, {}, { name: string; workflowId: string }>;

	type Update = AuthenticatedRequest<
		RouteParams.TestId,
		{},
		{ name?: string; evaluationWorkflowId?: string; annotationTagId?: string }
	>;

	type Delete = AuthenticatedRequest<RouteParams.TestId>;
}