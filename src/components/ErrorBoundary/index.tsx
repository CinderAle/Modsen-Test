import { Component, ReactNode } from 'react';

import paths from '@/constants/routes';

import { ErrorCode, ErrorContainer, ErrorLabel, ErrorMessage, HomeButton } from './styles';

type State = {
    hasError: boolean;
};

type Props = {
    children?: ReactNode;
};

const ERROR_CODE = '404';
const PAGE_NOT_FOUND = 'OOps! Page Not Found';
const ERROR_MESSAGE = "This page doesn't exist or was removed! We suggest you back to home";
const BACK_TO_HOME_PAGE = 'Back to homepage';

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
                    <ErrorCode>{ERROR_CODE}</ErrorCode>
                    <ErrorLabel>{PAGE_NOT_FOUND}</ErrorLabel>
                    <ErrorMessage>{ERROR_MESSAGE}</ErrorMessage>
                    <HomeButton href={paths.HOME_PAGE}>{BACK_TO_HOME_PAGE}</HomeButton>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}
