// Generated with util/create-component.js
import React from "react";

import { TableComponentProps } from "./TableComponent.types";

import "./TableComponent.scss";

const TableComponent: React.FC<TableComponentProps> = ({ items }) => (
    <table className="table-component">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            {!items.length &&
                <tr v-if="!items.length">
                    <td colSpan={3}>Nothing to display</td>
                </tr>
            }

            {items.map((item) =>
                <tr>
                    <td>
                        {item}
                    </td>
                    <td>a</td>
                    <td>3</td>
                </tr>
            )}
        </tbody>
    </table >
);

export default TableComponent;

