import { createFileRoute } from '@tanstack/react-router';
import { AdminLoginPage } from '@/components/skyarth/admin';
import { RouteMeta } from '@/components/skyarth/ui';
export const Route=createFileRoute('/admin/login')({head:()=>RouteMeta('Admin Login','Frontend demonstration access for SKYARTH Property website management.','/admin/login'),component:AdminLoginPage});
