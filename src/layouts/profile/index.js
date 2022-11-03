/**
=========================================================
* InternMe React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// InternMe React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// InternMe React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";


// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} md={6} xl={5}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Alec M. Thompson",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              social={[
                {
                  link: "https://www.facebook.com/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={5}>
            <PlatformSettings />
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                skills
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Software technologies
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="skill #2"
                  title="Angular"
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "error",
                    label: "Delete",
                  }}
                 
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="skill #2"
                  title="Angular"
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "error",
                    label: "Delete",
                  }}
                 
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="skill #2"
                  title="Angular"
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "error",
                    label: "Delete",
                  }}
                 
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New Skill" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

    </DashboardLayout>
  );
}

export default Overview;
