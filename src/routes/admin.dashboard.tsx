import { createFileRoute } from '@tanstack/react-router';
import { AdminDashboardPage } from '@/components/skyarth/admin';
import { RouteMeta } from '@/components/skyarth/ui';
export const Route=createFileRoute('/admin/dashboard')({head:()=>RouteMeta('Admin Dashboard','Frontend demonstration dashboard for managing SKYARTH Property content.','/admin/dashboard'),component:AdminDashboardPage});
