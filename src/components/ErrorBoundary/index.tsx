import { Component, ReactNode } from 'react';

import paths from '@/constants/routes';

import { ErrorCode, ErrorContainer, ErrorLabel, ErrorMessage, HomeButton } from './styles';

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
                <ErrorContainer>
                    <ErrorCode>404</ErrorCode>
                    <ErrorLabel>OOps! Page Not Found</ErrorLabel>
                    <ErrorMessage>This page doesn't exist or was removed! We suggest you back to home</ErrorMessage>
                    <HomeButton href={paths.HOME_PAGE}>Back to homepage</HomeButton>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}
