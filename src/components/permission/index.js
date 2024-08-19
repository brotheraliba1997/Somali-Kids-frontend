import { useGetPermissionQuery } from '@/redux/services/permissionAPI';
import React from 'react'
import { useSelector } from 'react-redux';

function Permission(pathSpread) {
    console.log(pathSpread, "pathSpread")
    const { data: permission, isLoading: perLoading } = useGetPermissionQuery();
    const authAdmin = useSelector((state) => state?.auth?.user?.role);
    const permissionRoleMatch = permission?.find(
        (items) => items?.role === authAdmin
      );
      const PermissionFinalValue = permissionRoleMatch?.actions?.find(
        (items) => items?.resource === pathSpread
      );

      return PermissionFinalValue
}

export default Permission
