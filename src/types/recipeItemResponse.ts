export type RecipeItemResponse = {
    recipe: {
        image: string;
        label: string;
    };
    _links: {
        self: {
            href: string;
        };
    };
};
