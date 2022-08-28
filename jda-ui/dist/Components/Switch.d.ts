import * as React from 'react';
interface SwitchProps {
    checked?: boolean;
    toggle: () => void;
    label?: string;
}
interface SwitchState {
    checked: boolean;
    tapped: boolean;
}
declare class Switch extends React.Component<SwitchProps, SwitchState> {
    constructor(props: any);
    shouldComponentUpdate(nextProps: Readonly<SwitchProps>, nextState: Readonly<SwitchState>): boolean;
    componentDidUpdate(prevProps?: Readonly<SwitchProps>, prevState?: Readonly<SwitchState>): void;
    toggleChecked(): void;
    render(): JSX.Element;
}
export { Switch };
