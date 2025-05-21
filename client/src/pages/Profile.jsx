import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "../components/ui/badge";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/users/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        setProfile(res.data);
      } catch (err) {
        setError("Failed to load profile. " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!profile) return null;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <div className="flex items-center">
        <span className="font-semibold w-32">ID:</span>
        <span>{profile.id}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold w-32">Email:</span>
        <span>{profile.email}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold w-32">First Name:</span>
        <span>{profile.first_name}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold w-32">Last Name:</span>
        <span>{profile.last_name}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold w-32">Active:</span>
        <span>
          <Badge variant={profile.is_active ? "success" : "destructive"}>
            {profile.is_active ? "Yes" : "No"}
          </Badge>
        </span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold w-32">Date Joined:</span>
        <span>{new Date(profile.date_joined).toLocaleString()}</span>
      </div>
      {profile.avatar && (
        <div>
          <img
            src={`http://localhost:8000/${profile.avatar}`}
            alt="Avatar"
            width={100}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
