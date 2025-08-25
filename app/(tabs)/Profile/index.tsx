import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, Info, LogOut, Settings, User } from 'lucide-react-native';
import { useTheme } from '../../_layout';

interface ProfileButtonProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ icon, text, onPress }) => {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center p-4 rounded-xl mx-4 mb-3 ${
        theme === 'dark' 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      } shadow-sm`}
    >
      <View className="mr-4">
        {React.cloneElement(icon as React.ReactElement, {
          size: 24,
          color: theme === 'dark' ? '#9ca3af' : '#6b7280'
        })}
      </View>
      <Text className={`text-lg font-medium ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const Index = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log('Edit Profile pressed');
  };

  const handleNotifications = () => {
    // Navigate to notifications screen
    console.log('Notifications pressed');
  };

  const handleSettings = () => {
    router.push('/Profile/settings');
  };

  const handleAbout = () => {
    // Navigate to about screen
    console.log('About pressed');
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout pressed');
  };

  return (
    <View className={`flex-1 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Profile Header */}
      <View className={`p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <View className="items-center">
          <View className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <User size={40} color={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
          </View>
          <Text className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            John Doe
          </Text>
          <Text className={`text-base ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            john.doe@example.com
          </Text>
        </View>
      </View>

      {/* Account Section */}
      <View className="mt-6">
        <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Account
        </Text>
        <ProfileButton
          icon={<User />}
          text="Edit Profile"
          onPress={handleEditProfile}
        />
        <ProfileButton
          icon={<Bell />}
          text="Notifications"
          onPress={handleNotifications}
        />
      </View>

      {/* Separator */}
      <View className={`h-px mx-4 my-4 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`} />

      {/* General Section */}
      <View>
        <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          General
        </Text>
        <ProfileButton
          icon={<Settings />}
          text="Settings"
          onPress={handleSettings}
        />
        <ProfileButton
          icon={<Info />}
          text="About"
          onPress={handleAbout}
        />
      </View>

      {/* Separator */}
      <View className={`h-px mx-4 my-4 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`} />

      {/* Actions Section */}
      <View>
        <Text className={`text-sm font-semibold uppercase tracking-wide px-4 mb-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Actions
        </Text>
        <ProfileButton
          icon={<LogOut />}
          text="Logout"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default Index;