import glob

files = ['src/App.tsx', 'src/components/Footer.tsx', 'src/components/FeaturedIdentity.tsx', 'src/components/Profile.tsx']
for f in files:
    lines = open(f).readlines()
    for i in range(len(lines)):
        if 'OnelynkLogo.png' in lines[i]:
            for j in range(i, max(-1, i-4), -1):
                if 'bg-white' in lines[j] and 'w-full h-full' not in lines[j]:
                    lines[j] = lines[j].replace('bg-white', 'bg-[#0A0A0A]')
                    break
                if 'bg-neutral-100' in lines[j]:
                    lines[j] = lines[j].replace('bg-neutral-100', 'bg-[#0A0A0A]')
                    break
    open(f, 'w').writelines(lines)
