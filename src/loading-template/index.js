import * as React from "react";
import Skeleton from "react-loading-skeleton";
import {
    StyledSkeleton,
    SkeletonHeader,
    SkeletonBody,
} from "./styled";

const TableSkeleton = () => {
    return (
        <StyledSkeleton data-testid="loading-skeleton">
            <SkeletonHeader>
                <div>
                    <Skeleton width={50} />
                </div>
                <div>
                    <Skeleton width={50} />
                </div>
                <div>
                    <Skeleton width={50} />
                </div>
                <div>
                    <Skeleton width={60} />
                </div>
            </SkeletonHeader>
            <SkeletonBody>
                <div>
                    <Skeleton circle={true} height={180} width={180} />
                </div>
            </SkeletonBody>
        </StyledSkeleton>
    );
};
export default TableSkeleton;
