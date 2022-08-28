import * as React from 'react';
import './navigation.css';
import { NavigationState, NavigationProps, MenuProps } from './Interface';
declare class Navigation extends React.Component<NavigationProps, NavigationState> {
    constructor(props: NavigationProps);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Readonly<NavigationProps>, nextState: Readonly<NavigationState>, nextContext: any): boolean;
    componentDidUpdate(prevProps: Readonly<NavigationProps>, prevState: Readonly<NavigationState>, snapshot?: any): void;
    componentWillUnmount(): void;
    toggle(): void;
    TopMenu: (props: MenuProps) => JSX.Element;
    render(): JSX.Element;
}
export { Navigation };
