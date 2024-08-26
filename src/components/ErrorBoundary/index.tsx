import { Component, ReactNode } from 'react';

import paths from '@/constants/routes';

type State = {
    hasError: boolean;
};

type Props = {
    children?: ReactNode;
};

export default class ErrorBoundary extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>404</h1>
                    <h2>OOps! Page Not Found</h2>
                    <p>This page doesn't exist or was removed! We suggest you back to home</p>
                    <a href={paths.HOME_PAGE}>Back to homepage</a>
                </div>
            );
        }

        return this.props.children;
    }
}
