import influencers from "@/components/influencer";
import Link from "next/link";
export default function AllInfluencers() {
    return (
        <div className="pt-24">
            <table className="w-full">
                <thead className="sticky top-0">
                    <tr className="text-[#a1a1aa]">
                        <th className="px-5 sm:px-8 pt-5 pb-8">Sn.</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">User </th>
                        <th className="px-5 sm:px-8 pt-5 pb-8 ">Likes</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">Comments</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">Plays</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">Reach</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">Engagement</th>
                        <th className="px-5 sm:px-8 pt-5 pb-8">Access</th>
                    </tr>
                </thead>
                <tbody className="overflow-y-auto">
                    {influencers.map((infl, index) => {
                        return (
                            <tr className="" key={index}>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {index + 1}
                                </td>
                                <td className="px-5 sm:px-8 py-3 text-lg">
                                    {infl.username} <br></br>
                                    <p className="text-[#a1a1aa] font-mono">
                                        Followers: {infl.followers}
                                        <br></br>
                                        {infl.dateUpdated}
                                    </p>
                                </td>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {infl.likes}
                                </td>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {infl.comments}
                                </td>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {infl.play}
                                </td>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {infl.reach}
                                </td>
                                <td className="px-5 sm:px-8 py-3 font-mono">
                                    {infl.engagement}
                                </td>
                                <td className="px-5 sm:px-8 py-3  ">
                                    <Link
                                        className="bg-gradient-to-r from-red-500 to-orange-500 rounded px-3 py-1 font-medium text-white flex justify-center"
                                        href={infl.link}
                                    >
                                        Follow Post!
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
